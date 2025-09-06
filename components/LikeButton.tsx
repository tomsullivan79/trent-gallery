'use client'
import { useEffect, useState, useTransition } from 'react'

export default function LikeButton({ slug }: { slug: string }) {
  const [count, setCount] = useState<number>(0)
  const [pending, start] = useTransition()

  useEffect(() => {
    fetch(`/api/like?slug=${encodeURIComponent(slug)}`).then(r => r.json()).then(d => setCount(d.count || 0)).catch(() => {})
  }, [slug])

  function like() {
    start(async () => {
      const res = await fetch(`/api/like`, { method: 'POST', body: JSON.stringify({ slug }) })
      const data = await res.json()
      setCount(data.count || 0)
    })
  }

  return (
    <div className="flex items-center gap-2">
      <button onClick={like} aria-label="Like this work" disabled={pending}>
        {pending ? '♥…' : '♥ Like'}
      </button>
      <span className="caption">{count}</span>
    </div>
  )
}