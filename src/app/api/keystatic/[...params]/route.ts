import { makeRouteHandler } from '@keystatic/next/route-handler'
import config from '../../../../../keystatic.config'

let handler: ReturnType<typeof makeRouteHandler> | null = null

function getHandler() {
  if (!handler) {
    handler = makeRouteHandler({ config })
  }
  return handler
}

export async function GET(req: Request) {
  return getHandler().GET(req)
}

export async function POST(req: Request) {
  return getHandler().POST(req)
}
