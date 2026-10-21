import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qianwen (Kaia) Gao | Interpretable & Controllable AI Agents',
  description:
    'Qianwen (Kaia) Gao is interested in interpretable and controllable AI agents, cognitive architectures, language reasoning, memory, and human-aware robotics.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
