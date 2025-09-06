import { sanityClient } from '@/lib/sanity.client'
import { allCollectionsQuery } from '@/lib/sanity.queries'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

export default async function HomePage() {
  const collections = await sanityClient.fetch(allCollectionsQuery)
  return (
    <div className="space-y-12">
      <section>
        <h1 className="h1">Watercolor Gallery</h1>
        <p>Minimal portfolio of works and curated collections.</p>
      </section>
      <section>
        <h2 className="h2">Collections</h2>
        <div className="grid-gap grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {collections?.map((c: any) => (
            <Link key={c._id} href={`/collections/${c.slug}`} className="block no-underline">
              <div className="aspect-[4/3] relative mb-3 bg-neutral-100">
                {c.heroImage && (
                  <Image src={urlFor(c.heroImage).width(1200).height(900).fit('min').url()} alt={c.title} fill className="object-contain" />
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