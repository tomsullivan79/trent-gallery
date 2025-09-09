applypatch <<'PATCH'
*** Begin Patch
*** Update File: app/works/page.tsx
@@
-import { sanityClient } from '@/lib/sanity.client'
-import { allWorksQuery } from '@/lib/sanity.queries'
-import Grid from '@/components/Grid'
-import WorkCard from '@/components/WorkCard'
+import { sanityClient } from '@/lib/sanity.client'
+import { allWorksQuery } from '@/lib/sanity.queries'
+import Grid from '@/components/Grid'
+import WorkCard from '@/components/WorkCard'
+import type { WorkListItem } from '@/types/content'
 
 export default async function WorksPage() {
-  const works = await sanityClient.fetch(allWorksQuery)
+  const works = await sanityClient.fetch<WorkListItem[]>(allWorksQuery)
   return (
     <div>
       <h1 className="h1">All Works</h1>
       <Grid>
-        {works?.map((w: any) => <WorkCard key={w._id} work={w} />)}
+        {works?.map((w) => <WorkCard key={w._id} work={w} />)}
       </Grid>
     </div>
   )
 }
*** End Patch
PATCH
