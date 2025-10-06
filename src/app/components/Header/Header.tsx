'use client'

import { Doto } from 'next/font/google'
import styles from './Header.module.scss'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const doto = Doto({
  weight: '800',
  subsets: ['latin'],
})

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const pathname = usePathname()
  const titles: Record<string, string> = {
    '/': '',
    '/todo': 'To-do list',
    '/timer': 'Timer',
    '/unit': 'Unit Converter',
    '/dice': 'Dice',
    '/clocks': 'Clocks',
  }

  const pageTitle = titles[pathname] ?? pathname

  return (
    <header className={styles.header}>
      <div className={styles.titles}>
        <h1 className={`${doto.className} ${styles.h1}`}>Micro-apps</h1>
        <h1 className={`${doto.className} ${styles.title}`}>{pageTitle}</h1>
      </div>
      <button onClick={handleClick} className={styles.menu}>
        <img src={isOpen ? '/close.webp' : '/open.webp'} className={styles.image} />
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <ul>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/todo" className={styles.link}>
              To-do
            </Link>
          </li>
          <li>
            <Link href="/timer" className={styles.link}>
              Timer
            </Link>
          </li>
          <li>
            <Link href="/unit" className={styles.link}>
              Unit Converter
            </Link>
          </li>
          <li>
            <Link href="/dice" className={styles.link}>
              Dice
            </Link>
          </li>
          <li>
            <Link href="/clocks" className={styles.link}>
              Clocks
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
