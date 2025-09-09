export const allWorksQuery = `*[_type == "work"]|order(year desc, title asc){
  _id, title, "slug": slug.current, year, tags, mainImage, alt,
  "artistName": artist->name
}`

export const workBySlugQuery = `*[_type == "work" && slug.current == $slug][0]{
  _id, title, year, medium, tags, description, mainImage, alt,
  "artist": artist->{name, bio, headshot}
}`

export const allCollectionsQuery = `*[_type == "collection"]|order(title asc){
  _id, title, intro, "slug": slug.current, heroImage,
  "count": count(works)
}`

export const collectionBySlugQuery = `*[_type == "collection" && slug.current == $slug][0]{
  _id, title, intro, description, heroImage,
  works[]->{title, year, mainImage, alt, "slug": slug.current, "artistName": artist->name},
}`

export const artistDocQuery = `*[_type == "artist"][0]{name, bio, headshot}`
