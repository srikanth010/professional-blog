/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add this to ensure Tailwind v4 styles are processed correctly
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;