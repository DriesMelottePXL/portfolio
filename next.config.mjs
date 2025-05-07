/** next.config.js */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // no basePath
  assetPrefix: "https://driesmelottepxl.github.io/portfolio/",
  trailingSlash: true,       // optional, but often helps with clean URLs
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
