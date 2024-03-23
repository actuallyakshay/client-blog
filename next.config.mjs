/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ideausher.com'
      },
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com'
      }
    ]
  }
};

export default nextConfig;
