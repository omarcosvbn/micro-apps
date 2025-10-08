import { Doto } from 'next/font/google'
import styles from './page.module.scss'
import Box from '../components/Box/Box'

const doto = Doto({
  weight: '800',
  subsets: ['latin'],
})

export default function Todo() {
  return (
    <div className={styles.container}>
      <h1 className={`${doto.className} ${styles.h1}`}>Micro-apps</h1>
      <Box cornerImage="/container.webp">
        <h2 className={`${doto.className} ${styles.h2}`}>To-do list</h2>
      </Box>
    </div>
  )
}
