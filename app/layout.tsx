import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qianwen (Kaia) Gao | Interpretable AI & Embodied Intelligence',
  description:
    'Qianwen (Kaia) Gao studies grounded reasoning, faithful explanations, and interpretable embodied agents, building on work in behavioral evaluation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
