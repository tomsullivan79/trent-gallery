import Link from 'next/link'
import Grid from '@/components/Grid'
import WorkCard from '@/components/WorkCard'
import { sfetch } from '@/lib/sanity.client'
import { allTagsQuery, allWorksQuery } from '@/lib/sanity.queries'

export const revalidate = 60

export default async function WorksPage({
  searchParams,
}: { searchParams?: { tag?: string } }) {
  const raw = searchParams?.tag
  const tag = typeof raw === 'string' && raw.trim() ? raw : undefined

  // ✅ tell TS what we expect back
  const [works, tags] = await Promise.all([
    tag
      ? sfetch<WorkListItem[]>(allWorksQuery, { tag })
      : sfetch<WorkListItem[]>(allWorksQuery),
    sfetch<string[]>(allTagsQuery),
  ])

  return (
    <div>
      <h1 className="h1">All Works</h1>

      {/* Tag chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Link
          href="/works"
          className={`px-3 py-1 rounded border ${!tag ? 'bg-black text-white' : ''}`}
        >
          All
        </Link>
        {tags?.map((t) => (
          <Link
            key={t}
            href={`/works?tag=${encodeURIComponent(t)}`}
            className={`px-3 py-1 rounded border ${tag === t ? 'bg-black text-white' : ''}`}
          >
            {t}
          </Link>
        ))}
      </div>

      <Grid>{works?.map((w) => <WorkCard key={w._id} work={w} />)}</Grid>
    </div>
  )
}
