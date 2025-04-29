/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://unpkg.com; frame-src 'self' https://player.cloudinary.com; img-src 'self' data: https://res.cloudinary.com; media-src 'self' https://res.cloudinary.com; style-src 'self' 'unsafe-inline' https://unpkg.com;"
          }
        ],
      },
    ]
  },
};

export default nextConfig;
