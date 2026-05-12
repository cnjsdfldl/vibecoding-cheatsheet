interface Props {
  variant?: 'thin' | 'thick' | 'dash'
  label?: string
}

const CHARS = {
  thin: '─',
  thick: '═',
  dash: '╌',
} as const

export default function AsciiDivider({ variant = 'thin', label }: Props) {
  const ch = CHARS[variant]
  if (label) {
    return (
      <div className="ascii-divider flex items-center gap-2 text-xs">
        <span className="flex-1 truncate">{ch.repeat(80)}</span>
        <span className="text-cyan/80 whitespace-nowrap">[ {label} ]</span>
        <span className="flex-1 truncate">{ch.repeat(80)}</span>
      </div>
    )
  }
  return <div className="ascii-divider truncate text-xs">{ch.repeat(200)}</div>
}
