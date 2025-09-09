import Link from 'next/link'

const studioEnabled =
  process.env.NEXT_PUBLIC_ENABLE_STUDIO === '1' &&
  process.env.VERCEL_ENV !== 'production'

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="no-underline">
          <span className="text-xl">Watercolor Gallery</span>
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/works">Works</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">About</Link>
          {studioEnabled && (
            <Link href="/studio" className="text-neutral-500">
              Studio
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
