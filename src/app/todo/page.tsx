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
      <div className={styles.post}>
      <Box cornerImage="/container.webp" mobileCornerImage="/side-container.webp" title="Type here" className={styles.input}>
        <form id="todo-form" className={styles.p}>
          <textarea placeholder="..." />
        </form>
      </Box>
      <Box cornerImage="/container.webp" className={styles.submit}>
        <button type="submit" form="todo-form">Submit</button>
      </Box>
      </div>
    </div>
  )
}
