import type { ReactNode } from 'react'
import type { BiText } from '@/i18n/types'
import { useI18n } from '@/hooks/useI18n'

interface Props {
  id: string
  num: string
  title: BiText
  subtitle?: BiText
  children: ReactNode
}

export default function Section({ id, num, title, subtitle, children }: Props) {
  const { pick } = useI18n()
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <header className="mb-4">
        <div className="flex items-baseline gap-2 text-amber font-mono">
          <span className="text-amber/80">$</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-fg-dim">section {num}</span>
        </div>
        <h2 className="mt-1 mb-1 text-[22px] font-bold text-fg">
          <span className="text-cyan">{pick(title)}</span>
        </h2>
        {subtitle && <p className="m-0 text-fg-dim text-[13px]">{pick(subtitle)}</p>}
      </header>
      <div>{children}</div>
    </section>
  )
}
