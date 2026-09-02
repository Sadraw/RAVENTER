import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Required for Capacitor mobile builds
  images: {
    unoptimized: true, // Allows public images to serve statically without server image optimization
  },
};

export default nextConfig;