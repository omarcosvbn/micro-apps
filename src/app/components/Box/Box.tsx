import styles from './Box.module.scss'
import React from 'react'

type BoxProps = {
  children?: React.ReactNode
  padding?: number
  cornerSize?: number
  cornerImage: string
  mobileCornerImage?: string
  className?: string
  title?: string
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
}

export default function Box({
  children,
  padding = 16,
  cornerSize = 32,
  cornerImage,
  mobileCornerImage,
  className,
  title,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: BoxProps) {
  const boxStyle: React.CSSProperties = {
    padding: `${padding}px`,
    paddingTop: paddingTop ? `${paddingTop}px` : undefined,
    paddingBottom: paddingBottom ? `${paddingBottom}px` : undefined,
    paddingLeft: paddingLeft ? `${paddingLeft}px` : undefined,
    paddingRight: paddingRight ? `${paddingRight}px` : undefined,
    borderRadius: `${cornerSize / 2 + 2}px`,
  }

  const titleStyle: React.CSSProperties = {
    padding: padding === 0 ? '16px' : 'undefined',
  }

  const cornerStyle: React.CSSProperties = {
    width: `${cornerSize}px`,
    height: `${cornerSize}px`,
    '--desktop-corner-image': `url(${cornerImage})`,
    '--mobile-corner-image': mobileCornerImage
      ? `url(${mobileCornerImage})`
      : `url(${cornerImage})`,
  } as React.CSSProperties

  return (
    <div className={`${styles.box} ${className ?? ''}`} style={boxStyle}>
      <span className={`${styles.corner} ${styles.tl}`} style={cornerStyle} />
      <span className={`${styles.corner} ${styles.tr}`} style={cornerStyle} />
      <span className={`${styles.corner} ${styles.br}`} style={cornerStyle} />
      <span className={`${styles.corner} ${styles.bl}`} style={cornerStyle} />
      {title ? (
        <h1 className={styles.title} style={titleStyle}>
          {title}
        </h1>
      ) : (
        ''
      )}
      {children}
    </div>
  )
}
