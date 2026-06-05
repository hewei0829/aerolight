import { makeRouteHandler } from '@keystatic/next/route-handler'
import config from '../../../../../keystatic.config'

let handler: ReturnType<typeof makeRouteHandler> | null = null

function getHandler() {
  if (!handler) {
    handler = makeRouteHandler({ config })
  }
  return handler
}

// Azure routes requests internally, so request.url has the wrong host.
// Use X-Forwarded-Host (set by Azure's proxy) to get the public hostname.
function fixAzureRequest(req: Request): Request {
  const url = new URL(req.url)
  if (url.hostname !== '127.0.0.1' && url.hostname !== 'localhost') return req

  const forwardedHost = req.headers.get('x-forwarded-host')
  const forwardedProto = req.headers.get('x-forwarded-proto') || 'https'
  if (forwardedHost) {
    // Strip any port from the forwarded host — public HTTPS has no port
    url.hostname = forwardedHost.split(':')[0]
    url.port = ''
    url.protocol = forwardedProto + ':'
    return new Request(url.toString(), req)
  }

  return req
}

export async function GET(req: Request) {
  return getHandler().GET(fixAzureRequest(req))
}

export async function POST(req: Request) {
  return getHandler().POST(fixAzureRequest(req))
}
