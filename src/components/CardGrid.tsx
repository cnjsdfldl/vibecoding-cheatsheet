import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** min card width in px */
  min?: number
  className?: string
}

export default function CardGrid({ children, min = 280, className = '' }: Props) {
  return (
    <div
      className={`grid gap-3 ${className}`}
      style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))` }}
    >
      {children}
    </div>
  )
}
