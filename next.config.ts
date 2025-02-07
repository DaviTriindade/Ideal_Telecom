import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Desabilita a otimização de imagens
  },
};

export default nextConfig;
