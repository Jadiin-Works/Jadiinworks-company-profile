/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['motion'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
