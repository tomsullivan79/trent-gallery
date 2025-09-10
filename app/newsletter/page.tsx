import NewsletterForm from '@/components/NewsletterForm'

export const metadata = {
  title: 'Newsletter — Trent Gallery',
  description: 'Occasional updates when new works or collections are published.',
}

export default function NewsletterPage() {
  return (
    <div className="space-y-6">
      <h1 className="h1">Newsletter</h1>
      <NewsletterForm />
    </div>
  )
}
