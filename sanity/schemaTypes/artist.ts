import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'bio', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'headshot', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'name' } })
,
  ],
})