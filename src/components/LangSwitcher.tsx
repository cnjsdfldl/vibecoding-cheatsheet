import { useI18n } from '@/hooks/useI18n'
import type { Lang } from '@/i18n/types'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'zh', label: '中' },
  { code: 'en', label: 'EN' },
]

export default function LangSwitcher() {
  const { lang, setLang } = useI18n()
  return (
    <div className="inline-flex items-center border border-line rounded overflow-hidden text-[11px]">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2 py-1 transition-colors ${
            lang === l.code
              ? 'bg-cyan/15 text-cyan shadow-[inset_0_0_8px_rgb(var(--neon-cyan)/0.25)]'
              : 'text-fg-dim hover:text-cyan'
          }`}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
