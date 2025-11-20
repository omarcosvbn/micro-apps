"use client"

import React, { useState } from 'react'
import Box from '../components/Box/Box'
import styles from './page.module.scss'

export default function Dice() {
  const [rolls, setRolls] = useState<number[]>([])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const picked = formData.get('numbers')
    const target = Number(picked)

    if (!target || target < 1 || target > 6) return

    const newRolls: number[] = []
    let roll = 0
    do {
      roll = Math.floor(Math.random() * 6) + 1
      newRolls.push(roll)
    } while (roll !== target)

    setRolls(newRolls)
  }

  return (
    <div className={styles.container}>
      <Box
        cornerImage="/container.webp"
        mobileCornerImage="/side-container.webp"
        className={styles.diceBox}
        title={rolls.length === 0 ? "Choose a number" : `It took you ${rolls.length.toString()} dice`}
      >
        {rolls.length > 0 ? (
          <div className={styles.sequence}>
            {rolls.map((r, i) => (
              <img key={i} src={`/dice/${r}.webp`} alt={`Dice ${r}`} width={125} height={125} />
            ))}
          </div>
        ) : null}
      </Box>

      <div className={styles.roll}>
        <form id="dice-form" onSubmit={handleSubmit}>
          <Box
            cornerImage="/container.webp"
            mobileCornerImage="/side-container.webp"
            className={styles.select}
          >
            <select name="numbers" id="number-select" required defaultValue="guess">
              <option value="guess" disabled>
                Guess a number:
              </option>
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
          <Box cornerImage="/container.webp">Roll</Box>
        </button>
      </div>
    </div>
  )
}
