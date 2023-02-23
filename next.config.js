/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['static.wikia.nocookie.ne'],
  },
}

module.exports = nextConfig
