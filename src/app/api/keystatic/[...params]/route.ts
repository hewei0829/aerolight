import { makeRouteHandler } from '@keystatic/next/route-handler'
import config from '../../../../../keystatic.config'

const handler = makeRouteHandler({ config })

export async function GET(req: Request, ctx: unknown) {
  const url = new URL(req.url)
  const isCallback = url.pathname.includes('/oauth/callback')

  if (isCallback) {
    console.log('[keystatic] OAuth callback hit')
    console.log('[keystatic] KEYSTATIC_GITHUB_CLIENT_ID:', process.env.KEYSTATIC_GITHUB_CLIENT_ID)
    console.log('[keystatic] NEXT_PUBLIC_KEYSTATIC_GITHUB_CLIENT_ID:', process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_CLIENT_ID)
    console.log('[keystatic] KEYSTATIC_GITHUB_CLIENT_SECRET:', process.env.KEYSTATIC_GITHUB_CLIENT_SECRET)
    console.log('[keystatic] KEYSTATIC_SECRET:', process.env.KEYSTATIC_SECRET)
  }

  const res = await handler.GET(req, ctx)

  if (isCallback) {
    console.log('[keystatic] callback response status:', res.status)
    const body = await res.clone().text()
    console.log('[keystatic] callback response body:', body)
  }

  return res
}

export async function POST(req: Request, ctx: unknown) {
  return handler.POST(req, ctx)
}
