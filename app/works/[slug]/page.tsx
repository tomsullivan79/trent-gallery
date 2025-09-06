import { sanityClient } from '@/lib/sanity.client'
import { workBySlugQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import Image from 'next/image'
import PortableTextBlock from '@/components/PortableTextBlock'
import CopyLinkButton from '@/components/CopyLinkButton'
import LikeButton from '@/components/LikeButton'

export default async function WorkDetail({ params }: { params: { slug: string } }) {
  const work = await sanityClient.fetch(workBySlugQuery, { slug: decodeURIComponent(params.slug) })
  if (!work) return <div>Not found</div>
  const src = work.mainImage ? urlFor(work.mainImage).width(2000).fit('max').url() : ''
  return (
    <article className="space-y-6">
      <div className="aspect-[4/3] relative bg-neutral-100">
        {work.mainImage && (
          <Image src={src} alt={work.alt || work.title} fill className="object-contain" />
        )}
      </div>

      <header>
        <h1 className="h1">{work.title}</h1>
        <p className="caption">{work.artist?.name}{work.year ? `, ${work.year}` : ''}{work.medium ? ` · ${work.medium}` : ''}</p>
      </header>

      <PortableTextBlock value={work.description} />

      <div className="flex gap-4">
        <CopyLinkButton />
        <LikeButton slug={`/works/${params.slug}`} />
      </div>
    </article>
  )
}
