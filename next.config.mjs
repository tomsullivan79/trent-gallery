/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['cdn.sanity.io'] },
  // fine to keep, even if packages are devOnly:
  transpilePackages: ['sanity', '@sanity/vision', 'next-sanity', '@sanity/ui'],
}
export default nextConfig
