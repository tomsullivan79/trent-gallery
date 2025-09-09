import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import artist from './schemaTypes/artist'
import work from './schemaTypes/work'
import collection from './schemaTypes/collection'
import siteSettings from './schemaTypes/siteSettings'

export default defineConfig({
  name: 'default',
  title: 'Watercolor Gallery',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.editor()
                  .id('siteSettings')
                  .schemaType('siteSettings')
                  .documentId('siteSettings') // <- singleton doc id
              ),
            S.divider(),
            // Hide siteSettings from the regular document list
            ...S.documentTypeListItems().filter(li => li.getId() !== 'siteSettings'),
          ]),
    }),
  ],
  schema: { types: [artist, work, collection, siteSettings] },
})
