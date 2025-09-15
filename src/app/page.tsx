import { Doto } from 'next/font/google'
import styles from './page.module.scss'

const doto = Doto({
  weight: '800',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${doto.className} ${styles.h1}`}>Micro-apps</h1>
    </div>
  )
}
