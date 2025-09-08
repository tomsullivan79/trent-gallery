import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Watercolor Gallery',
  description: 'Museum-clean portfolio of watercolor works and collections.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container museum py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
