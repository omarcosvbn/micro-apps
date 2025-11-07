'use client'

import Link from 'next/link'
import styles from './Apps.module.scss'
import { useAppTitle } from '../../store/useAppTitle'
import Box from '../Box/Box'

export default function Apps() {
  const currentAppTitle = useAppTitle((s) => s.currentAppTitle)
  const setCurrentAppTitle = useAppTitle((s) => s.setCurrentAppTitle)

  const handleAppClick = (title: string) => {
    setCurrentAppTitle(title)
  }
  return (
    <Box cornerImage="/side-container.webp" cornerSize={64} padding={0} className={styles.box}>
      <ul className={styles.apps}>
        <li className={currentAppTitle === 'To-do list' ? styles.selected : ''}>
          <Link className={styles.link} href="/todo" onClick={() => handleAppClick('To-do list')}>
            To-do list
          </Link>
        </li>
        <li className={currentAppTitle === 'Timer' ? styles.selected : ''}>
          <Link className={styles.link} href="/timer" onClick={() => handleAppClick('Timer')}>
            Timer
          </Link>
        </li>
        <li className={currentAppTitle === 'Unit Converter' ? styles.selected : ''}>
          <Link
            className={styles.link}
            href="/unit"
            onClick={() => handleAppClick('Unit Converter')}
          >
            Unit Converter
          </Link>
        </li>
        <li className={currentAppTitle === 'Dice' ? styles.selected : ''}>
          <Link className={styles.link} href="/dice" onClick={() => handleAppClick('Dice')}>
            Dice
          </Link>
        </li>
        <li className={currentAppTitle === 'Clocks' ? styles.selected : ''}>
          <Link className={styles.link} href="/clocks" onClick={() => handleAppClick('Clocks')}>
            Clocks
          </Link>
        </li>
      </ul>
    </Box>
  )
}
