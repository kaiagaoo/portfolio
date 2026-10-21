import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qianwen (Kaia) Gao | AI Interpretability & Cognitive Modeling',
  description:
    'Qianwen (Kaia) Gao studies AI interpretability, cognitive modeling, and language model evaluation. Explore research, publications, and projects.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
