/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Sanity images come from this host
    domains: ['cdn.sanity.io'],
  },
  eslint: {
    // CI won't fail on lint errors; you can still run `npm run lint` locally
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
