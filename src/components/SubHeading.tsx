import type { BiText } from '@/i18n/types'
import { useI18n } from '@/hooks/useI18n'

interface Props {
  id?: string
  num?: string
  title: BiText
}

export default function SubHeading({ id, num, title }: Props) {
  const { pick } = useI18n()
  return (
    <h3 id={id} className="scroll-mt-24 mt-8 mb-3 flex items-baseline gap-2 text-[16px]">
      <span className="text-amber/90">▸</span>
      {num && <span className="text-fg-mute text-[12px] font-normal">{num}</span>}
      <span className="text-fg">{pick(title)}</span>
      {title.zh !== title.en && <span className="text-fg-mute text-[11px] font-normal">/ {pick(title) === title.zh ? title.en : title.zh}</span>}
    </h3>
  )
}
