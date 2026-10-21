import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qianwen (Kaia) Gao | Interpretable AI & Embodied Intelligence',
  description:
    'Qianwen (Kaia) Gao studies grounded reasoning, faithful explanations, and interpretable embodied agents, building on work in behavioral evaluation.',
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
