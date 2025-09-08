'use client'

// Only enable Studio when explicitly requested via env var.
// This avoids bundling Sanity in production, sidestepping Turbopack quirks.
export default function StudioPage() {
  if (process.env.NEXT_PUBLIC_ENABLE_STUDIO !== '1') {
    return (
      <div style={{ padding: 24, lineHeight: 1.6 }}>
        <h1 style={{ fontSize: 20, marginBottom: 8 }}>Studio is disabled on production</h1>
        <p>
          Open it locally at <code>http://localhost:3000/studio</code>, or set
          <code> NEXT_PUBLIC_ENABLE_STUDIO=1</code> in your env and redeploy.
        </p>
      </div>
    )
  }

  // Load Studio lazily only when enabled
  const { NextStudio } = require('next-sanity/studio')
  const config = require('@/sanity/sanity.config').default
  return <NextStudio config={config} />
}
