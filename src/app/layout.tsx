import type { Metadata } from 'next'
import '@/lib/styles/global.scss'
import './layout.scss'

export const metadata: Metadata = {
  title: '都道府県別の総人口推移グラフを表示するSPA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  )
}
