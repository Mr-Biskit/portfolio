/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  env: {
    SERVER: process.env.NEXT_PUBLIC_URL,
  },
  nextConfig,
};
