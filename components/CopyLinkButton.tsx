'use client'
import { useState } from 'react'

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false)
  async function onClick() {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ url })
        return
      }
    } catch {}
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }
  return <button onClick={onClick}>{copied ? 'Copied' : 'Share'}</button>
}