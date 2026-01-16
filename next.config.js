/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'ui-avatars.com',
      'picsum.photos', // ✅ add this
    ],
  },
};

module.exports = nextConfig;
