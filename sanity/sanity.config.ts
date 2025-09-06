import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import artist from './schemaTypes/artist'
import work from './schemaTypes/work'
import collection from './schemaTypes/collection'

export default defineConfig({
  name: 'default',
  title: 'Trent Gallery',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: { types: [artist, work, collection] },
})
