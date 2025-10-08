import styles from './Box.module.scss'
import React from 'react'

type BoxProps = {
  children?: React.ReactNode
  padding?: number
  cornerSize?: number
  cornerImage: string
  className?: string
}

export default function Box({
  children,
  padding = 16,
  cornerSize = 32,
  cornerImage,
  className,
}: BoxProps) {
  const boxStyle: React.CSSProperties = {
    padding: `${padding}px`,
    borderRadius: `${(cornerSize/2) + 2}px`,
  }

  const cornerStyle: React.CSSProperties = {
    width: `${cornerSize}px`,
    height: `${cornerSize}px`,
    backgroundImage: `url(${cornerImage})`,
  }

  return (
    <div className={`${styles.box} ${className ?? ''}`} style={boxStyle}>
      <span className={`${styles.corner} ${styles.tl}`} style={cornerStyle} />
      <span className={`${styles.corner} ${styles.tr}`} style={cornerStyle} />
      <span className={`${styles.corner} ${styles.br}`} style={cornerStyle} />
      <span className={`${styles.corner} ${styles.bl}`} style={cornerStyle} />
      {children}
    </div>
  )
}


