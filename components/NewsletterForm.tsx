'use client'
import { useEffect } from 'react'

export default function NewsletterForm() {
  const account = process.env.NEXT_PUBLIC_MAILERLITE_ACCOUNT
  const formId = process.env.NEXT_PUBLIC_MAILERLITE_FORM

  useEffect(() => {
    if (!account) return

    // Load MailerLite universal script once
    const existing = document.getElementById('ml-embed')
    if (!existing) {
      const s = document.createElement('script')
      s.id = 'ml-embed'
      s.src = 'https://assets.mailerlite.com/js/universal.js'
      s.async = true
      document.body.appendChild(s)
      s.onload = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(window as any).ml('account', account, 'load')
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).ml?.('account', account, 'load')
    }
  }, [account])

  if (!account || !formId) return null

  return (
    <div className="space-y-3">
      <p className="museum">Get new works and collection updates by email.</p>
      {/* MailerLite injects the form into this div */}
      <div className="ml-embedded" data-form={formId} />
    </div>
  )
}
