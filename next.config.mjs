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
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc '
      }

    ]
  }
}

export default nextConfig;
