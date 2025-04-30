/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@emailjs/browser'],
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
