import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "weeecentre.com", pathname: "/assets/**" }],
  },
};

export default nextConfig;
