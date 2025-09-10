import Script from 'next/script'

export const metadata = {
  title: 'Newsletter — Trent Gallery',
  description: 'Sign up to be notified with occasional updates when new works or collections are published.',
}

export default function NewsletterPage() {
  const account =
    process.env.NEXT_PUBLIC_MAILERLITE_ACCOUNT ||
    process.env.NEXT_PUBLIC_MAILERLITE_ACCOUNT_ID

  const formId =
    process.env.NEXT_PUBLIC_MAILERLITE_FORM ||
    process.env.NEXT_PUBLIC_MAILERLITE_FORM_ID

  if (!account || !formId) {
    return (
      <div className="museum">
        <h1 className="h1">Newsletter</h1>
        <p>
          Newsletter form is not configured yet. Add{' '}
          <code>NEXT_PUBLIC_MAILERLITE_ACCOUNT</code> and{' '}
          <code>NEXT_PUBLIC_MAILERLITE_FORM</code> (or the <code>..._ID</code> versions)
          in Vercel → Project → Settings → Environment Variables, then redeploy.
        </p>
      </div>
    )
  }

  return (
    <div className="museum">
      <Script
        id="ml-universal"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,e,u,f,l,n){
              w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments)}
              l=d.createElement(e); l.async=1; l.src=u
              n=d.getElementsByTagName(e)[0]; n.parentNode.insertBefore(l,n)
            })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '${account}', 'load');
          `,
        }}
      />
      <h1 className="h1">Newsletter</h1>
      <p className="mb-6">Get new works and collection updates by email.</p>
      <div className="ml-embedded" data-form={formId} />
    </div>
  )
}
