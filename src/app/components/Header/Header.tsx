'use client'

import { Doto } from 'next/font/google'
import styles from './Header.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { useAppTitle } from '../../store/useAppTitle'

const doto = Doto({
  weight: '800',
  subsets: ['latin'],
})

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentAppTitle, setCurrentAppTitle } = useAppTitle()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.titles}>
        <h1 className={`${doto.className} ${styles.h1}`}>Micro-apps</h1>
        <h1 className={`${doto.className} ${styles.title}`}>{currentAppTitle}</h1>
      </div>
      <button onClick={handleClick} className={styles.menu}>
        <img src={isOpen ? '/close.webp' : '/open.webp'} className={styles.image} />
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <ul>
          <li>
            <Link
              href="/"
              className={styles.link}
              onClick={() => {
                setCurrentAppTitle('')
                handleCloseMenu()
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/todo"
              className={styles.link}
              onClick={() => {
                setCurrentAppTitle('To-do list')
                handleCloseMenu()
              }}
            >
              To-do
            </Link>
          </li>
          <li>
            <Link
              href="/timer"
              className={styles.link}
              onClick={() => {
                setCurrentAppTitle('Timer')
                handleCloseMenu()
              }}
            >
              Timer
            </Link>
          </li>
          <li>
            <Link
              href="/unit"
              className={styles.link}
              onClick={() => {
                setCurrentAppTitle('Unit Converter')
                handleCloseMenu()
              }}
            >
              Unit Converter
            </Link>
          </li>
          <li>
            <Link
              href="/dice"
              className={styles.link}
              onClick={() => {
                setCurrentAppTitle('Dice')
                handleCloseMenu()
              }}
            >
              Dice
            </Link>
          </li>
          <li>
            <Link
              href="/clocks"
              className={styles.link}
              onClick={() => {
                setCurrentAppTitle('Clocks')
                handleCloseMenu()
              }}
            >
              Clocks
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
