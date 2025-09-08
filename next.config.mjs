/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['cdn.sanity.io'] },
  transpilePackages: ['sanity', '@sanity/vision', 'next-sanity', '@sanity/ui'],
}
export default nextConfig
