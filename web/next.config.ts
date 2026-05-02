import type { NextConfig } from "next";

/** Static HTML/CSS/JS for GitHub Pages — see `README.md`. */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
