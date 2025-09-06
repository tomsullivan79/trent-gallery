import { sanityClient } from '@/lib/sanity.client'
import { allWorksQuery } from '@/lib/sanity.queries'
import Grid from '@/components/Grid'
import WorkCard from '@/components/WorkCard'

export default async function WorksPage() {
  const works = await sanityClient.fetch(allWorksQuery)
  return (
    <div>
      <h1 className="h1">All Works</h1>
      <Grid>
        {works?.map((w: any) => <WorkCard key={w._id} work={w} />)}
      </Grid>
    </div>
  )
}