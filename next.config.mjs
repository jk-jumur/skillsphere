/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows images from any HTTPS website
      },
      {
        protocol: 'http',
        hostname: '**', // Allows images from any HTTP website
      },
    ],
  },
};

export default nextConfig;