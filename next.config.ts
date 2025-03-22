import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds:true,
  },
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "adlsprodstorage1.blob.core.windows.net",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
