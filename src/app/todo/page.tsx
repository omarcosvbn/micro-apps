'use client'

import { useState } from 'react'
import styles from './page.module.scss'
import Box from '../components/Box/Box'

export default function Todo() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState<string[]>([])
  const [selected, setSelected] = useState<number | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const value = input.trim()
    if (!value) return
    setTodos((prev) => [...prev, value])
    setInput('')
  }

  function deleteSelected() {
    if (selected === null) return
    setTodos((prev) => prev.filter((_, i) => i !== selected))
    setSelected(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <Box
          cornerImage="/container.webp"
          mobileCornerImage="/side-container.webp"
          title="Type here"
          className={styles.input}
        >
          <form id="todo-form" className={styles.p} onSubmit={handleSubmit}>
            <textarea
              placeholder="..."
              value={input}
              onChange={(e) => setInput((e.target as HTMLTextAreaElement).value)}
            />
          </form>
        </Box>
        <button type="submit" form="todo-form" className={styles.submit}>
          <Box cornerImage="/container.webp">Submit</Box>
        </button>
      </div>

      <div className={styles.tasks}>
        <Box
          cornerImage="/container.webp"
          mobileCornerImage="/side-container.webp"
          title="Tasks"
          padding={0}
          paddingBottom={16}
          className={styles.tasks__display}
        >
          {todos.length === 0 ? (
            <></>
          ) : (
            <ul className={styles.p}>
              {todos.map((t, i) => (
                <li key={i} className={i === selected ? styles.selected : ''} onClick={() => setSelected(i)}>
                  {t}
                </li>
              ))}
            </ul>
          )}
        </Box>
        <div className={styles.tasks__buttons}>
          <div className={styles.tasks__buttons__arrows}>
            <button className={styles.submit}>
              <Box cornerImage="/container.webp">up</Box>
            </button>

            <button className={styles.submit}>
              <Box cornerImage="/container.webp">down</Box>
            </button>
          </div>
          <button className={styles.tasks__buttons__delete} onClick={() => deleteSelected()}>
            <Box cornerImage="/container.webp">delete</Box>
          </button>
        </div>
      </div>
    </div>
  )
}
