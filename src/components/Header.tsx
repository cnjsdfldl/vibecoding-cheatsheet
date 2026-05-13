import { useI18n } from '@/hooks/useI18n'
import LangSwitcher from './LangSwitcher'

const LAST_UPDATED = '2026-05-12'

interface Props {
  onOpenSearch: () => void
}

export default function Header({ onOpenSearch }: Props) {
  const { t, pick } = useI18n()
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/85 backdrop-blur">
      {/* fake terminal title bar */}
      <div className="flex items-center gap-3 px-3 h-7 border-b border-line/60 bg-bg-elev/70 text-[11px] text-fg-dim select-none">
        <div className="flex items-center gap-1.5">
          <span className="block w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="flex-1 text-center truncate">~/vibecoding-cheatsheet ─ zsh ─ 120×40</span>
        <span className="text-fg-mute hidden sm:inline">
          {t('lastUpdated')}: <span className="text-fg-dim">{LAST_UPDATED}</span>
        </span>
      </div>
      {/* main bar */}
      <div className="flex items-center gap-3 px-4 h-12">
        <div className="flex items-baseline gap-2 min-w-0">
          <span className="text-amber font-bold">$</span>
          <span className="font-display text-cyan text-[15px] tracking-wider truncate neon-cyan">
            vibecoding cheat sheet
          </span>
          <span className="hidden md:inline text-fg-dim text-[12px] truncate">
            ─ {pick({ zh: 'AI 编程速查表', en: 'AI Coding CheatSheet' })}
          </span>
        </div>
        <div className="flex-1" />
        <button
          onClick={onOpenSearch}
          className="hidden sm:flex items-center gap-2 h-8 px-3 border border-line rounded text-[12px] text-fg-dim hover:text-cyan hover:border-cyan/60 transition-colors"
        >
          <span className="text-amber">⌕</span>
          <span>{t('searchPlaceholder')}</span>
          <span className="ml-2 flex items-center gap-1 text-fg-mute">
            <kbd>Ctrl</kbd>
            <kbd>K</kbd>
          </span>
        </button>
        <LangSwitcher />
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="text-[12px] text-fg-dim hover:text-cyan"
          aria-label="GitHub"
          title="GitHub"
        >
          [ git ]
        </a>
      </div>
    </header>
  )
}
