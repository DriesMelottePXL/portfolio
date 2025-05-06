/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/DriesMelottePXL',
  assetPrefix: '/DriesMelottePXL/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
