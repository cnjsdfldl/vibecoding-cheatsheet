import type { ReactNode } from 'react'
import { useI18n } from '@/hooks/useI18n'
import type { DictKey } from '@/i18n/dict'

type Variant = 'tip' | 'warning' | 'anti' | 'note'

interface Props {
  variant: Variant
  title?: ReactNode
  children: ReactNode
}

const STYLES: Record<Variant, { border: string; bg: string; label: string; tag: DictKey; icon: string }> = {
  tip: { border: 'border-green/50', bg: 'bg-green/[0.05]', label: 'text-green', tag: 'tip', icon: '⟫' },
  warning: { border: 'border-amber/50', bg: 'bg-amber/[0.05]', label: 'text-amber', tag: 'warning', icon: '!' },
  anti: { border: 'border-magenta/50', bg: 'bg-magenta/[0.05]', label: 'text-magenta', tag: 'antiPattern', icon: '✘' },
  note: { border: 'border-cyan/40', bg: 'bg-cyan/[0.04]', label: 'text-cyan', tag: 'note', icon: 'i' },
}

export default function Callout({ variant, title, children }: Props) {
  const { t } = useI18n()
  const s = STYLES[variant]
  return (
    <div className={`my-4 border-l-2 ${s.border} ${s.bg} rounded-r-md`}>
      <div className="flex items-stretch">
        <div className={`w-9 flex items-center justify-center text-lg font-bold ${s.label}`}>{s.icon}</div>
        <div className="flex-1 py-2 pr-3">
          <div className={`text-[11px] tracking-[0.2em] uppercase font-semibold ${s.label}`}>
            [{t(s.tag)}]
            {title && <span className="ml-2 text-fg/80 normal-case tracking-normal">{title}</span>}
          </div>
          <div className="mt-1 text-fg/90 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
