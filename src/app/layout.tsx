import type { Metadata } from 'next'
import { Jersey_10 } from 'next/font/google'
import './globals.scss'
import Header from './components/Header/Header'
import Apps from './components/Apps/Apps'

const jersey10 = Jersey_10({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Micro-apps',
  description: 'Micro-apps',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={jersey10.className}>
        <Header />
        <Apps />
        {children}
      </body>
    </html>
  )
}
