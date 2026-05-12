import type { ReactNode } from 'react'

interface Props {
  title?: string
  status?: ReactNode
  className?: string
}

export default function TerminalBar({ title = '~/vibecoding-cheatsheet ─ zsh', status, className = '' }: Props) {
  return (
    <div
      className={`flex items-center gap-3 px-3 h-8 border-b border-line/70 bg-bg-elev/80 backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-1.5">
        <span className="block w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="block w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="block w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 text-center text-fg-dim text-xs truncate select-none">{title}</div>
      <div className="text-fg-dim text-xs">{status}</div>
    </div>
  )
}
