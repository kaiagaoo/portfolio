import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qianwen (Kaia) Gao | Interpretable AI & Embodied Intelligence',
  description:
    'Qianwen (Kaia) Gao works on behavioral evaluation and is interested in interpretable cognitive architectures, language, memory, planning, and embodied intelligence.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
