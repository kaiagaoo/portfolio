import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qianwen (Kaia) Gao | Cognitive Architectures & Human-Aware AI',
  description:
    'Qianwen (Kaia) Gao is interested in cognitive architectures, language reasoning, memory, commonsense, and social cognition for human-aware AI and robotics.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
