import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/keystatic/\\[\\.\\.\\.params\\]": ["./app/content/keystatic/**/*"],
  },
};

export default nextConfig;
