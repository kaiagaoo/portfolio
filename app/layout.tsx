import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qianwen (Kaia) Gao | AI Interpretability & Evaluation',
  description:
    'Qianwen (Kaia) Gao studies AI interpretability and evaluation through behavioral tests, causal interventions, and mechanistic analysis, with broader interests in multimodal and embodied intelligence.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var savedTheme = localStorage.getItem('portfolio-theme');
            document.documentElement.dataset.theme = savedTheme === 'light' || savedTheme === 'dark'
              ? savedTheme
              : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
          } catch (error) {
            document.documentElement.dataset.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
