import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qianwen (Kaia) Gao | Interpretable AI & Robotics',
  description:
    'Qianwen (Kaia) Gao is interested in interpretable and controllable AI and robotics, cognitive architectures, language reasoning, memory, and human-aware physical AI.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
