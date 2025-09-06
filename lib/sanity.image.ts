import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { sanityClient } from './sanity.client'

const builder = createImageUrlBuilder({ projectId: sanityClient.config().projectId!, dataset: sanityClient.config().dataset! })
export const urlFor = (source: SanityImageSource) => builder.image(source)