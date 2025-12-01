/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/WMHN',
  assetPrefix: '/WMHN/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
