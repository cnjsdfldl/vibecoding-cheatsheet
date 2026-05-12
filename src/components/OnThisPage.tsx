import { useEffect, useState } from 'react'
import { useI18n } from '@/hooks/useI18n'

interface Heading {
  id: string
  text: string
  level: number
}

export default function OnThisPage() {
  const { t } = useI18n()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const collect = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>('main h3[id]'))
      setHeadings(
        els.map((el) => ({
          id: el.id,
          text: el.textContent?.replace(/\/.*$/, '').trim() ?? el.id,
          level: 3,
        }))
      )
    }
    collect()
    const mo = new MutationObserver(collect)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => mo.disconnect()
  }, [])

  useEffect(() => {
    if (headings.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )
    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div className="text-[12px] py-4 pl-2">
      <div className="px-2 mb-2 text-[11px] text-fg-mute uppercase tracking-[0.2em]">
        ── {t('onThisPage')} ──
      </div>
      <ul className="m-0 p-0 list-none border-l border-line/60">
        {headings.map((h) => {
          const isActive = active === h.id
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block pl-3 -ml-px py-1 border-l-2 transition-colors truncate ${
                  isActive
                    ? 'text-cyan border-cyan'
                    : 'text-fg-dim border-transparent hover:text-fg hover:border-line'
                }`}
              >
                {h.text}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
