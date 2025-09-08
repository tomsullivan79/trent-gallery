/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import Grid from '@/components/Grid'
import WorkCard from '@/components/WorkCard'
import { sanityClient } from '@/lib/sanity.client'
import { allTagsQuery, allWorksQuery } from '@/lib/sanity.queries'

export const revalidate = 60

export default async function WorksPage({
  searchParams,
}: { searchParams?: { tag?: string } }) {
  const raw = searchParams?.tag
  const tag = typeof raw === 'string' && raw.trim() ? raw : undefined

  // ✅ Call fetch with 2 args only when tag exists
  const worksPromise = tag
    ? sanityClient.fetch(allWorksQuery, { tag })
    : sanityClient.fetch(allWorksQuery)

  const tagsPromise = sanityClient.fetch(allTagsQuery)

  const [works, tags] = await Promise.all([worksPromise, tagsPromise])

  return (
    <div>
      <h1 className="h1">All Works</h1>

      {/* Tag chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Link href="/works" className={`px-3 py-1 rounded border ${!tag ? 'bg-black text-white' : ''}`}>All</Link>
        {tags?.map((t: string) => (
          <Link
            key={t}
            href={`/works?tag=${encodeURIComponent(t)}`}
            className={`px-3 py-1 rounded border ${tag === t ? 'bg-black text-white' : ''}`}
          >
            {t}
          </Link>
        ))}
      </div>

      <Grid>{works?.map((w: any) => <WorkCard key={w._id} work={w} />)}</Grid>
    </div>
  )
}
