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
    domains: ['res.cloudinary.com'], // Autoriser les images et vidéos de Cloudinary
  },
  // Configuration pour les en-têtes HTTP
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
        ],
      },
      {
        source: '/api/video-proxy',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // Configuration pour les redirections
  async rewrites() {
    return [
      {
        source: '/videos/:path*',
        destination: '/videos/:path*',
      },
      {
        source: '/cloudinary-video',
        destination: 'https://res.cloudinary.com/dh52kmuhc/video/upload/v1745880132/4383263-hd_1920_1080_30fps_oqnvrd.mp4',
      },
    ]
  },
};

export default nextConfig;
