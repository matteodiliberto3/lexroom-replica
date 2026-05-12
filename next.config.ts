import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/65314337e943130bf7a6d549/**",
      },
    ],
  },
};

export default nextConfig;
