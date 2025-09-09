import type { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity.client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  // Fetch only what we need for URLs
  const [works, collections] = await Promise.all([
    sanityClient.fetch<{slug: {current: string}, _updatedAt?: string}[]>(
      '*[_type=="work"]{ "slug": slug.current, _updatedAt }'
    ),
    sanityClient.fetch<{slug: {current: string}, _updatedAt?: string}[]>(
      '*[_type=="collection"]{ "slug": slug.current, _updatedAt }'
    ),
  ])

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${base}/`,           lastModified: new Date() },
    { url: `${base}/works`,      lastModified: new Date() },
    { url: `${base}/collections`,lastModified: new Date() },
    { url: `${base}/about`,      lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    // explicitly omit /studio from sitemap
  ]

  const workUrls: MetadataRoute.Sitemap =
    (works || []).map(w => ({
      url: `${base}/works/${encodeURIComponent(w.slug?.current || '')}`,
      lastModified: w._updatedAt ? new Date(w._updatedAt) : undefined,
    }))

  const collectionUrls: MetadataRoute.Sitemap =
    (collections || []).map(c => ({
      url: `${base}/collections/${encodeURIComponent(c.slug?.current || '')}`,
      lastModified: c._updatedAt ? new Date(c._updatedAt) : undefined,
    }))

  return [...staticUrls, ...workUrls, ...collectionUrls]
}
