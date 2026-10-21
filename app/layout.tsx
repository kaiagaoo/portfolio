import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qianwen (Kaia) Gao | Interpretable AI & Human-Aware Robotics',
  description:
    'Qianwen (Kaia) Gao studies language-model evaluation and memory, with research interests in interpretability, cognitive architectures, and human-aware robotics.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
