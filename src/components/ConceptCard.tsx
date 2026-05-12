import type { ReactNode } from 'react'

interface Props {
  title: ReactNode
  subtitle?: ReactNode
  tag?: ReactNode
  children: ReactNode
  accent?: 'cyan' | 'magenta' | 'amber' | 'green'
}

const ACCENT: Record<NonNullable<Props['accent']>, string> = {
  cyan: 'text-cyan',
  magenta: 'text-magenta',
  amber: 'text-amber',
  green: 'text-green',
}

export default function ConceptCard({ title, subtitle, tag, children, accent = 'cyan' }: Props) {
  return (
    <div className="group relative border border-line/80 bg-bg-elev/60 rounded-md p-3 hover:border-cyan/60 hover:shadow-glow-cyan transition-all">
      <div className="flex items-start gap-2">
        <span className={`${ACCENT[accent]} font-bold leading-tight select-none`}>▸</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <h3 className={`m-0 text-[15px] font-semibold ${ACCENT[accent]}`}>{title}</h3>
            {tag && (
              <span className="text-[10px] uppercase tracking-wider text-fg-mute border border-line/80 px-1.5 py-px rounded">
                {tag}
              </span>
            )}
          </div>
          {subtitle && <div className="text-xs text-fg-dim mt-0.5">{subtitle}</div>}
          <div className="mt-2 text-[13px] text-fg/90 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
