import { makeRouteHandler } from '@keystatic/next/route-handler'
import config from '../../../../../keystatic.config'

let handler: ReturnType<typeof makeRouteHandler> | null = null

function getHandler() {
  if (!handler) {
    handler = makeRouteHandler({ config })
  }
  return handler
}

// Azure App Service routes requests internally via 127.0.0.1:8080.
// Rewrite to the public hostname so Keystatic builds the correct redirect_uri.
function fixAzureRequest(req: Request): Request {
  const azureHost = process.env.WEBSITE_HOSTNAME
  if (!azureHost) return req
  const url = new URL(req.url)
  if (url.hostname === '127.0.0.1' || url.hostname === 'localhost') {
    url.hostname = azureHost
    url.port = ''
    url.protocol = 'https:'
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
