/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.vecteezy.com', 'cdn.thewirecutter.com'],
  },
};

module.exports = nextConfig;
