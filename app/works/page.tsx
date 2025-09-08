import Link from 'next/link'
import { sanityClient } from '@/lib/sanity.client'
import { allWorksQuery, allTagsQuery } from '@/lib/sanity.queries'
import Grid from '@/components/Grid'
import WorkCard from '@/components/WorkCard'

export const revalidate = 60

export default async function WorksPage({ searchParams }: { searchParams?: { tag?: string } }) {
  const tag = searchParams?.tag ?? null
  const [works, tags] = await Promise.all([
    sanityClient.fetch(allWorksQuery, { tag }),
    sanityClient.fetch(allTagsQuery),
  ])

  return (
    <div>
      <h1 className="h1">All Works</h1>

      {/* Tag chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Link href="/works" className={`px-3 py-1 rounded border ${!tag ? 'bg-black text-white' : ''}`}>All</Link>
        {tags?.map((t: string) => (
          <Link key={t} href={`/works?tag=${encodeURIComponent(t)}`} className={`px-3 py-1 rounded border ${tag===t ? 'bg-black text-white' : ''}`}>
            {t}
          </Link>
        ))}
      </div>

      <Grid>
        {works?.map((w: any) => <WorkCard key={w._id} work={w} />)}
      </Grid>
    </div>
  )
}
