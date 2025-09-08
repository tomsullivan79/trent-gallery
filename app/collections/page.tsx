/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityClient } from '@/lib/sanity.client'
import { allCollectionsQuery } from '@/lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.image'

export const revalidate = 60

export default async function CollectionsPage() {
  const rows = await sanityClient.fetch(allCollectionsQuery)
  return (
    <div>
      <h1 className="h1">Collections</h1>
      <div className="grid-gap grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {rows?.map((c: any) => (
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
    </div>
  )
}