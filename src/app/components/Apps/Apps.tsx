import Link from 'next/link'
import styles from './Apps.module.scss'

export default function Apps() {
  return (
    <div className={styles.container}>
      <ul className={styles.apps}>
        <li>
          <Link className={styles.link} href="/todo">To-do list</Link>
        </li>
        <li>
          <Link className={styles.link} href="/timer">Timer</Link>
        </li>
        <li>
          <Link className={styles.link} href="/unit">Unit Converter</Link>
        </li>
        <li>
          <Link className={styles.link} href="/dice">Dice</Link>
        </li>
        <li>
          <Link className={styles.link} href="/clocks">Clocks</Link>
        </li>
      </ul>
    </div>
  )
}
