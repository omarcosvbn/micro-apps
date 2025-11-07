import Box from '../components/Box/Box'
import styles from './page.module.scss'

export default function Dice() {
  return (
    <div className={styles.container}>
      <Box cornerImage="/container.webp" mobileCornerImage="/side-container.webp">
        {(() => {
          const roll = Math.floor(Math.random() * 6) + 1
          const src = `/dice/${roll}.webp`
          return (
            <div>
              <img src={src} alt={`Dice ${roll}`} width={128} height={128} />
            </div>
          )
        })()}
      </Box>
    </div>
  )
}
