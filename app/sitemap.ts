import type { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity.client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://trent-gallery.vercel.app'

  const works: { slug: string; _updatedAt?: string }[] = await sanityClient.fetch(
    `*[_type=="work" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
  )
  const cols: { slug: string; _updatedAt?: string }[] = await sanityClient.fetch(
    `*[_type=="collection" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
  )

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/works`, lastModified: new Date() },
    { url: `${base}/collections`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
  ]

  const workPages = works.map((w) => ({
    url: `${base}/works/${w.slug}`,
    lastModified: w._updatedAt ? new Date(w._updatedAt) : undefined,
  }))

  const colPages = cols.map((c) => ({
    url: `${base}/collections/${c.slug}`,
    lastModified: c._updatedAt ? new Date(c._updatedAt) : undefined,
  }))

  return [...staticPages, ...workPages, ...colPages]
}
