import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://cdn.realmajed.com/tafe/**')],
  },

};

export default nextConfig;
