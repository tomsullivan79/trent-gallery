import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Privacy — Trent Gallery',
  description:
    'Plain-English Terms of Service and Privacy Notice for Trent Gallery.',
  robots: { index: true, follow: true },
}

const UPDATED = 'September 9, 2025'

export default function LegalPage() {
  return (
    <article className="space-y-6">
      <h1 className="h1">Terms & Privacy</h1>
      <p className="caption">Last updated: {UPDATED}</p>

      <section className="museum space-y-3">
        <h2 className="h2">Who we are</h2>
        <p>
          Trent Gallery showcases watercolor works by Deborah Trent. This site
          is informational and non-transactional.
        </p>
        <p>
          Contact: <a href="mailto:hello@trent-gallery.com">hello@trent-gallery.com</a>
        </p>
      </section>

      <section className="museum space-y-3">
        <h2 className="h2">Terms of Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Don’t misuse the site (no scraping, spamming, or security probing).</li>
          <li>We may update or remove content at any time.</li>
          <li>
            The site is provided “as is” without warranties; we’re not liable
            for indirect or consequential damages to the extent permitted by law.
          </li>
          <li>Governing law: Illinois, USA.</li>
        </ul>
      </section>

      <section className="museum space-y-3">
        <h2 className="h2">Copyright</h2>
        <p>
          All artwork and images © their respective rights holders. You may not
          copy, reproduce, or redistribute images without written permission.
          Brief quotations or linking is fine—please include attribution.
        </p>
      </section>

      <section className="museum space-y-3">
        <h2 className="h2">Privacy</h2>
        <p>We collect as little personal data as possible.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Newsletter (MailerLite).</strong> If you subscribe, we store your
            email with MailerLite to send occasional updates. You can unsubscribe
            anytime using the link in any email. We do not sell your data.
          </li>
          <li>
            <strong>Analytics (Google Analytics 4).</strong> We use privacy-friendly,
            aggregated analytics to understand visit patterns (pages, referrers,
            approximate geography). GA may set cookies or use similar tech.
          </li>
          <li>
            <strong>Likes.</strong> The “like” counter stores an identifier for the
            work’s slug and a numeric count; it does not store your identity.
          </li>
          <li>
            <strong>Server logs.</strong> Our host may log IP and user-agent for
            security and reliability.
          </li>
        </ul>
        <p>
          Processors we rely on: Vercel (hosting), Sanity (content), Supabase
          (likes), MailerLite (email), Google Analytics (analytics), Cloudflare
          (domain/DNS). Each has its own policies.
        </p>
      </section>

      <section className="museum space-y-3">
        <h2 className="h2">Cookies</h2>
        <p>
          Essential cookies keep the site working. Analytics cookies may be set
          by Google. You can block cookies in your browser. If you block
          analytics, the site still works.
        </p>
      </section>

      <section className="museum space-y-3">
        <h2 className="h2">Your choices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Unsubscribe: use the link at the bottom of any newsletter email or
            write us at <a href="mailto:hello@trent-gallery.com">hello@trent-gallery.com</a>.
          </li>
          <li>
            Data requests (access/delete): email{' '}
            <a href="mailto:hello@trent-gallery.com">hello@trent-gallery.com</a>.
          </li>
        </ul>
      </section>

      <section className="museum space-y-3">
        <h2 className="h2">Changes</h2>
        <p>
          We’ll update this page when policies change. Material changes will be
          noted with a new “Last updated” date.
        </p>
      </section>

      <hr />
      <p className="caption">
        This page is plain-English and not legal advice. If anything here
        conflicts with applicable law, the law controls.
      </p>

      <p className="caption">
        Need help? <Link href="/contact">Contact us</Link>.
      </p>
    </article>
  )
}
