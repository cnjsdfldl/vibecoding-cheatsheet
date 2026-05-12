import type { BiText } from '@/i18n/types'
import { useI18n } from '@/hooks/useI18n'

/** Inline span that renders the current language. */
export default function Bi({ text, className = '' }: { text: BiText; className?: string }) {
  const { pick } = useI18n()
  return <span className={className}>{pick(text)}</span>
}
