import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.image'

export default function WorkCard({ work }: { work: any }) {
  const img = work.mainImage
  const src = img ? urlFor(img).width(800).height(600).fit('min').url() : ''
  return (
    <Link href={`/works/${work.slug}`} className="block no-underline">
      {img && (
        <div className="aspect-[4/3] relative mb-3 bg-neutral-100">
          <Image
            src={src}
            alt={work.alt || work.title}
            fill
            sizes="(max-width:768px) 100vw, 25vw"
            className="object-contain"
          />
        </div>
      )}
      <div className="text-sm">
        <div className="font-semibold">{work.title}</div>
        <div className="caption">
          {work.artistName}
          {work.year ? `, ${work.year}` : ''}
        </div>
      </div>
    </Link>
  )
}
