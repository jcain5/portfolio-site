import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  outputFileTracingIncludes: {
    "/api/keystatic/\\[\\.\\.\\.params\\]": ["./app/content/keystatic/**/*"],
  },
};

export default nextConfig;
