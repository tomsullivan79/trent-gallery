import { sanityClient } from '@/lib/sanity.client'
import { artistDocQuery } from '@/lib/sanity.queries'
import PortableTextBlock from '@/components/PortableTextBlock'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

export default async function AboutPage() {
  const artist = await sanityClient.fetch(artistDocQuery)
  if (!artist) return <div>Add an Artist doc in Studio.</div>
  return (
    <article className="space-y-6">
      <h1 className="h1">About the Artist</h1>
      {artist.headshot && (
        <div className="relative w-48 h-48 bg-neutral-100">
          <Image src={urlFor(artist.headshot).width(512).height(512).fit('min').url()} alt={artist.name} fill className="object-cover" />
        </div>
      )}
      <h2 className="text-xl font-semibold">{artist.name}</h2>
      <PortableTextBlock value={artist.bio} />
    </article>
  )
}