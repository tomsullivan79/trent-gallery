export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="container py-10 text-sm text-neutral-600">
        © {new Date().getFullYear()} — Watercolor Gallery
      </div>
    </footer>
  )
}