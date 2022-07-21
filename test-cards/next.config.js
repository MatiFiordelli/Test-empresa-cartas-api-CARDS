/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
	  domains: ['deckofcardsapi.com'],
  },
}

module.exports = nextConfig
