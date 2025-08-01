/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' https://assets.calendly.com 'unsafe-inline' 'unsafe-eval'; " +
              "style-src 'self' https://assets.calendly.com 'unsafe-inline'; " +
              "frame-src https://calendly.com https://assets.calendly.com; " +
              "connect-src 'self' https://calendly.com https://assets.calendly.com; " +
              "img-src 'self' data: https://*.calendly.com;",
          },
        ],
      },
    ]
  },
}

export default nextConfig
