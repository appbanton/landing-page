import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stand-in photography while real project photos are being collected.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
