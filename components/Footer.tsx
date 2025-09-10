import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="container py-10 text-sm text-neutral-600 flex items-center justify-between flex-wrap gap-3">
        <div>© {new Date().getFullYear()} — Deborah Trent</div>
        <nav className="flex gap-4">
          <Link href="/newsletter">Newsletter</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
