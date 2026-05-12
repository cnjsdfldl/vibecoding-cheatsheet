import type { BiText } from '@/i18n/types'
import { useI18n } from '@/hooks/useI18n'

interface Props {
  text: BiText
  className?: string
}

/** Paragraph that renders the current language. */
export default function BiP({ text, className = '' }: Props) {
  const { pick } = useI18n()
  return <p className={`my-2 text-fg/90 leading-relaxed ${className}`}>{pick(text)}</p>
}
