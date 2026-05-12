import { useI18n } from '@/hooks/useI18n'

export default function Footer() {
  const { pick } = useI18n()
  return (
    <footer className="mt-16 border-t border-line/60 bg-bg-elev/30">
      <div className="max-w-7xl mx-auto px-4 py-6 text-[12px] text-fg-dim flex flex-col sm:flex-row gap-2 items-center justify-between">
        <div>
          <span className="text-amber">$</span>{' '}
          {pick({
            zh: '愿你一键调出 AI 的灵感，所写即所得。',
            en: 'May your prompts compile on the first try.',
          })}
        </div>
        <div className="text-fg-mute">
          ── built with React · Vite · Tailwind · Fuse ──
        </div>
      </div>
    </footer>
  )
}
