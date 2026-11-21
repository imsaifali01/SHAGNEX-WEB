import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "192.168.1.7",
    "192.168.1.*",
    "10.99.156.180",
    "10.99.156.*",
  ],
};

export default nextConfig;
