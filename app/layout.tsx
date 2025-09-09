import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata = {
  title: 'Watercolor Gallery',
  description: 'Museum-clean portfolio of watercolor works and collections.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ...header, main, footer, etc... */}
        {children}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
