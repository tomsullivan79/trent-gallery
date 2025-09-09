import type { Metadata } from 'next'
import EmailLink from '@/components/EmailLink'

export const metadata: Metadata = {
  title: 'Contact — Trent Gallery',
  description: 'Get in touch with Trent Gallery. Email hello@trent-gallery.com.',
}

export default function ContactPage() {
  return (
    <main className="space-y-6">
      <h1 className="h1">Contact</h1>
      <p className="museum">
        For inquiries about original art works, prints, commissions,
        or exhibitions, please reach out:
      </p>
      <EmailLink />
      <hr />
      <p className="caption">
        Tip: If you don’t see a reply, check your spam folder or add our address to your contacts.
      </p>
    </main>
  )
}
