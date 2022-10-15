/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
	  domains: ['deckofcardsapi.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deckofcardsapi.com',
        port: '',
        pathname: 'static/img/**',
      },
    ],
  },
}

module.exports = nextConfig
