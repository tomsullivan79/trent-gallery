/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityClient } from '@/lib/sanity.client'
import { collectionBySlugQuery } from '@/lib/sanity.queries'
import PortableTextBlock from '@/components/PortableTextBlock'
import Grid from '@/components/Grid'
import WorkCard from '@/components/WorkCard'

export const revalidate = 60

export default async function CollectionDetail({ params }: { params: { slug: string } }) {
  const col = await sanityClient.fetch(collectionBySlugQuery, { slug: params.slug })
  if (!col) return <div>Not found</div>
  return (
    <article className="space-y-6">
      <header>
        <h1 className="h1">{col.title}</h1>
        {col.intro && <p className="text-lg">{col.intro}</p>}
      </header>
      <PortableTextBlock value={col.description} />
      <Grid>
        {col.works?.map((w: any) => <WorkCard key={w.slug} work={w} />)}
      </Grid>
    </article>
  )
}