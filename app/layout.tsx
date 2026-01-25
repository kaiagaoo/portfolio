import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kaia Gao | Data Science Portfolio',
  description:
    'Qianwen (Kaia) Gao – Data Scientist. User behavior, causal inference, growth experimentation. Berkeley.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
