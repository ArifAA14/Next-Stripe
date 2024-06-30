/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com'
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co'
      }

    ]
  }
}

export default nextConfig;
