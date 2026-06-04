/** @type {import('next').NextConfig} */
const isStatic = process.env.STATIC_EXPORT === 'true' && !process.env.VERCEL

const nextConfig = {
  output: isStatic ? 'export' : undefined,
  images: { unoptimized: isStatic },
}

export default nextConfig
