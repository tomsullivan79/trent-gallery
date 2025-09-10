import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="container py-10 text-sm text-neutral-600 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} — Deborah Trent</div>
        <nav className="flex gap-4">
          <Link href="/newsletter">Newsletter</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/legal">Terms &amp; Privacy</Link>
        </nav>
      </div>
    </footer>
  )
}
