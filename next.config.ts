import type { NextConfig } from "next";

// Static export for GitHub Pages (served at /konoba-kaciol/)
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/konoba-kaciol" : "",
  images: { unoptimized: true },
};

export default nextConfig;
