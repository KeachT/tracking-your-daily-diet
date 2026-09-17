/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The e2e service reaches the dev server as http://nextjs:3000. Next.js blocks
  // dev resources such as the HMR socket for any host other than localhost
  // unless it is listed here. This only affects `next dev`.
  allowedDevOrigins: ['nextjs'],
}

module.exports = nextConfig
