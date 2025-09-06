import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'intro', type: 'text' }),
    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'heroImage', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'works',
      title: 'Works (drag to reorder)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'work' }] }],
      options: { sortable: true },
      validation: r => r.min(1),
    }),
    defineField({
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    slugify: (input) =>
      input
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
        .slice(0, 96),
  },
  validation: (r) => r.required(),
})
,
  ],
})