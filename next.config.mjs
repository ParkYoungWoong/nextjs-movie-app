/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'heropy.dev' },
      { hostname: 'm.media-amazon.com' }
    ]
  }
}

export default nextConfig
