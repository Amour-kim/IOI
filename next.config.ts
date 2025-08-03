import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Optimisations pour Vercel
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Compression et optimisation
  compress: true,
  // Optimisation des images
  images: {
    remotePatterns:[
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/media/**'
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
