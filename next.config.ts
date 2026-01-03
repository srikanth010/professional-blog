/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This creates a static HTML/CSS/JS bundle
  images: {
    unoptimized: true,   // Cloudflare Pages requires this for static exports
  },
};

export default nextConfig;