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
    domains: ['www.youtube.com', 'i.ytimg.com', 'img.youtube.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.youtube.com https://s.ytimg.com; frame-src https://www.youtube.com; img-src 'self' data: https://i.ytimg.com https://img.youtube.com; style-src 'self' 'unsafe-inline';"
          }
        ],
      },
    ]
  },
};

export default nextConfig;
