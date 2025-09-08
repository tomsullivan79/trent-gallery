import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://trent-gallery.vercel.app'
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: [`${base}/sitemap.xml`],
  }
}
