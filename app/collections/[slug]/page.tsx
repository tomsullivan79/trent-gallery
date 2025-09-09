import { sanityClient } from '@/lib/sanity.client'
import { collectionBySlugQuery } from '@/lib/sanity.queries'
import PortableTextBlock from '@/components/PortableTextBlock'
import Grid from '@/components/Grid'
import WorkCard from '@/components/WorkCard'
import { notFound } from 'next/navigation'

export const revalidate = 60

export default async function CollectionDetail({ params }: { params: { slug: string } }) {
  const col = await sanityClient.fetch(collectionBySlugQuery, { slug: params.slug })
if (!col) return notFound()
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