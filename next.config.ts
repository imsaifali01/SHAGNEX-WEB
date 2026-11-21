import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OneDrive marks the old .next folder as a cloud reparse point on this PC.
  // Use a normal local project folder for Next's generated files.
  distDir: ".next-build",
  experimental: {
    // Avoid parallel generated-file writes on the OneDrive-backed folder.
    cpus: 1,
    workerThreads: false,
  },
  allowedDevOrigins: [
    // Local development origins.
    "127.0.0.1",
    "localhost",
    // Network addresses used by this computer.
    "192.168.1.7",
    "192.168.1.*",
    "10.99.156.180",
    "10.99.156.*",
  ],
};

export default nextConfig;
