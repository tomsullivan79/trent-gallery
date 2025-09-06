import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'year', type: 'string', description: 'e.g., 2022 or circa 1990' }),
    defineField({ name: 'artist', type: 'reference', to: [{ type: 'artist' }], validation: r => r.required() }),
    defineField({ name: 'medium', type: 'string', initialValue: 'Watercolor on paper' }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'mainImage', type: 'image', options: { hotspot: true }, validation: r => r.required() }),
    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
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
    defineField({ name: 'alt', type: 'string', description: 'Alt text for accessibility' }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage', subtitle: 'year' },
  },
})