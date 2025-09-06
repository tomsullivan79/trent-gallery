import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase.server'

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug') || ''
  if (!slug) return NextResponse.json({ error: 'missing slug' }, { status: 400 })
  const sb = supabaseAdmin()
  const { data, error } = await sb.from('likes').select('count').eq('slug', slug).maybeSingle()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ count: data?.count || 0 })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const slug = body.slug as string
  if (!slug) return NextResponse.json({ error: 'missing slug' }, { status: 400 })
  const sb = supabaseAdmin()
  const { data, error } = await sb.rpc('increment_like', { p_slug: slug })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ count: data as number })
}