'use client'

import { Doto } from 'next/font/google'
import styles from './Header.module.scss'
import { useState } from 'react';

const doto = Doto({
  weight: '800',
  subsets: ['latin'],
})

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <h1 className={`${doto.className} ${styles.h1}`}>Micro-apps</h1>
      <button onClick={handleClick} className={styles.menu}>
        <img src={isOpen ? "/close.webp" : "/open.webp"} className={styles.image}/>
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <ul>
          <li>
            <a href="/" className={styles.link}>Home</a>
          </li>
          <li>
            <a href="/todo" className={styles.link}>To-do</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
