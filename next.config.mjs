/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['cdn.sanity.io'] },

  // 👇 Helps Next/Vercel build Sanity packages cleanly
  transpilePackages: ['sanity', '@sanity/vision', 'next-sanity', '@sanity/ui'],
  experimental: { esmExternals: 'loose' },
}

export default nextConfig
