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
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'asset.cloudinary.com'
    ],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://unpkg.com; frame-src 'self' https://player.cloudinary.com; img-src 'self' data: https://res.cloudinary.com https://images.unsplash.com; media-src 'self' https://res.cloudinary.com; style-src 'self' 'unsafe-inline' https://unpkg.com https://cdnjs.cloudflare.com; font-src 'self' https://cdnjs.cloudflare.com https://fonts.gstatic.com;"
          }
        ],
      },
    ]
  },
};

export default nextConfig;
