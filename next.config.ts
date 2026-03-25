import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the local network IP to load Next.js JS bundles in dev
  allowedDevOrigins: ["192.168.1.4"],
};

export default nextConfig;
