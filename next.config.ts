/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    // This disables the experimental Lightning CSS minifier
    useLightningcss: false, 
  },
};

export default nextConfig;