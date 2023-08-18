import { ErrorBoundary } from 'react-error-boundary'
import type { Metadata } from 'next'
import './global.scss'

export const metadata: Metadata = {
  title: 'JP-POP-TREND',
  description: '都道府県別の総人口推移グラフを表示するSPA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body>
        <ErrorBoundary
          fallback={<div>エラーが発生しました。再読み込みしてください。</div>}
        >
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
