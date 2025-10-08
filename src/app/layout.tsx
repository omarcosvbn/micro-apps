import type { Metadata } from 'next'
import { Jersey_10 } from 'next/font/google'
import './styles/globals.scss'
import Header from './components/Header/Header'
import Apps from './components/Apps/Apps'
import styles from './styles/layout.module.scss'

const jersey10 = Jersey_10({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Micro-apps',
  description: 'The name is self explanatory',
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
        <div className={styles.container}>
          <Apps />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
