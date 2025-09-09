'use client'

import { useState } from 'react'

export default function EmailLink() {
  const [copied, setCopied] = useState(false)

  // Obfuscate to reduce scraping
  const user = 'hello'
  const domain = 'trent-gallery.com'
  const email = `${user}@${domain}`
  const mailto = `mailto:${email}`

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // no-op
    }
  }

  return (
    <div className="flex items-center gap-3">
      <a href={mailto} className="underline underline-offset-4">
        {email}
      </a>
      <button onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
    </div>
  )
}
