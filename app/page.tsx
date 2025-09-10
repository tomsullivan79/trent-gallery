import type { Metadata } from 'next'
import { sanityClient } from '@/lib/sanity.client'
import { allCollectionsQuery, siteSettingsQuery } from '@/lib/sanity.queries'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

export const revalidate = 60

export const metadata: Metadata = { title: 'Trent Gallery — Artwork by Deborah Trent' }

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityClient.fetch(siteSettingsQuery)
  const title =
    settings?.siteTitle?.trim() ||
    'Trent Gallery — Watercolor Portfolio'
  const description =
    settings?.siteDescription?.trim() ||
    'Minimal watercolor portfolio with curated collections and high-quality images.'
  return { title, description }
}

export default async function HomePage() {
  const [settings, collections] = await Promise.all([
    sanityClient.fetch(siteSettingsQuery),
    sanityClient.fetch(allCollectionsQuery),
  ])

  const heroFromCMS = settings?.heroImage
  const heroSrc = heroFromCMS
    ? urlFor(heroFromCMS).width(2400).height(1350).fit('min').url()
    : '/hero.jpg' // fallback to your static hero
  const heroAlt =
    settings?.heroHeadline ||
    settings?.siteTitle ||
    'Watercolor painting'
  const heroHeadline = settings?.heroHeadline || 'Watercolor Gallery'
  const heroSubhead =
    settings?.heroSubhead || 'Minimal portfolio of works and curated collections.'

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section aria-label="Featured">
        <div className="relative aspect-[16/9] bg-neutral-100 rounded-2xl overflow-hidden">
          <Image
            src={heroSrc}
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-4">
          <h1 className="h1">{heroHeadline}</h1>
          <p className="museum">{heroSubhead}</p>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section>
        <h2 className="h2">Collections</h2>
        <div className="grid-gap grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {collections?.map((c: any) => (
            <Link key={c._id} href={`/collections/${c.slug}`} className="block no-underline">
              <div className="aspect-[4/3] relative mb-3 bg-neutral-100">
                {c.heroImage && (
                  <Image
                    src={urlFor(c.heroImage).width(1200).height(900).fit('min').url()}
                    alt={c.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="text-sm">
                <div className="font-semibold">{c.title}</div>
                <div className="caption">{c.count} works</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
