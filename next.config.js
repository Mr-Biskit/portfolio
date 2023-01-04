/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER: process.env.NEXT_PUBLIC_URL,
  },
};
