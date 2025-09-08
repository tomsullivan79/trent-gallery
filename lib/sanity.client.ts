import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'

export const sanityClient = createClient({ projectId, dataset, apiVersion, useCdn: true })


// Looser fetch to avoid TS overload issues with query params like `$tag`
export const sfetch = <T = unknown>(
  query: string,
  params?: Record<string, unknown>
) => (sanityClient as any).fetch<T>(query as any, params as any)