import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'

export const sanityClient = createClient({ projectId, dataset, apiVersion, useCdn: true })


// Looser typed fetch helper (avoids overload errors when params are optional)
type LooseFetch = <T = unknown>(q: string, p?: Record<string, unknown>) => Promise<T>
type LooseClient = { fetch: LooseFetch }

const looseClient = sanityClient as unknown as LooseClient
export const sfetch: LooseFetch = (query, params) => looseClient.fetch(query, params) 