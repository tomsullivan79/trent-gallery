'use client'
import { useEffect, useState } from 'react'

export default function StudioPage() {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_STUDIO === '1'
  const [NextStudio, setNextStudio] = useState<any>(null)
  const [config, setConfig] = useState<any>(null)

  // Don’t even load the modules unless explicitly enabled (local)
  useEffect(() => {
    if (!enabled) return
    // Use dynamic import with non-static strings to avoid build-time analysis
    const studioMod = 'next-sanity/studio'
    const cfgMod = '@/sanity/sanity.config'
    Promise.all([
      import(/* webpackIgnore: true */ studioMod).then(m => m.NextStudio),
      import(/* webpackIgnore: true */ cfgMod).then(m => m.default),
    ]).then(([Studio, cfg]) => {
      setNextStudio(() => Studio)
      setConfig(cfg)
    })
  }, [enabled])

  if (!enabled) {
    return (
      <div style={{ padding: 24, lineHeight: 1.6 }}>
        <h1 style={{ fontSize: 20, marginBottom: 8 }}>Studio is disabled on production</h1>
        <p>
          Open it locally at <code>http://localhost:3000/studio</code>, or set
          {' '}<code>NEXT_PUBLIC_ENABLE_STUDIO=1</code> in your env and redeploy.
        </p>
      </div>
    )
  }

  if (!NextStudio || !config) return <div style={{ padding: 24 }}>Loading…</div>
  return <NextStudio config={config} />
}
