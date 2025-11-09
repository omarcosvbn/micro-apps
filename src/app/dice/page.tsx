"use client"

import Box from '../components/Box/Box'
import styles from './page.module.scss'

export default function Dice() {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }


  return (
    <div className={styles.container}>
      <Box cornerImage="/container.webp" mobileCornerImage="/side-container.webp" className={styles.diceBox}>
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

      <div className={styles.roll}>
        <form id="dice-form" onSubmit={handleSubmit}>
          <Box
            cornerImage="/container.webp"
            mobileCornerImage="/side-container.webp"
            className={styles.select}
          >
            <select name="numbers" id="number-select" required defaultValue="guess">
              <option value="guess" disabled>Guess a number:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </Box>
        </form>

        <button type="submit" form="dice-form" className={styles.submit}>
          <Box cornerImage="/container.webp">
            Roll
          </Box>
        </button>
      </div>
    </div>
  )
}
