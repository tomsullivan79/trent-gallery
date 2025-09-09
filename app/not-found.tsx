import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container py-20">
      <h1 className="h1">Page not found</h1>
      <p className="museum mb-8">
        The page you’re looking for doesn’t exist. Try the Works or Collections.
      </p>
      <div className="flex gap-3">
        <Link href="/" className="no-underline">
          <button>Back to Home</button>
        </Link>
        <Link href="/works" className="no-underline">
          <button>Browse Works</button>
        </Link>
        <Link href="/collections" className="no-underline">
          <button>View Collections</button>
        </Link>
      </div>
    </main>
  )
}
