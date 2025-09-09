/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // keep this simple: Sanity images always come from this host
    domains: ['cdn.sanity.io'],
  },
}

export default nextConfig
