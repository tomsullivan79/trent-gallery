import type { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity.client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const works = await sanityClient.fetch(`*[_type=="work"]{ "slug": slug.current, _updatedAt }`)
  const cols  = await sanityClient.fetch(`*[_type=="collection"]{ "slug": slug.current, _updatedAt }`)

  const staticPages = ['','/works','/collections','/about'].map(p => ({
    url: `${base}${p || '/'}`, lastModified: new Date()
  }))
  const workPages = works.map((w:any)=>({ url: `${base}/works/${w.slug}`, lastModified: w._updatedAt ? new Date(w._updatedAt) : new Date() }))
  const colPages  = cols.map((c:any)=>({ url: `${base}/collections/${c.slug}`, lastModified: c._updatedAt ? new Date(c._updatedAt) : new Date() }))

  return [...staticPages, ...workPages, ...colPages]
}


