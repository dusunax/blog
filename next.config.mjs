// next.config.mjs
import withPlaiceholder from "@plaiceholder/next";
import withImages from "next-images";
import { withContentlayer } from "next-contentlayer";
/** @type {import('next').NextConfig} */

const nextConfig = withImages({
  experimental: {
    appDir: true,
    serverActions: true,
  },
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
});

export default withPlaiceholder(withContentlayer(nextConfig));
