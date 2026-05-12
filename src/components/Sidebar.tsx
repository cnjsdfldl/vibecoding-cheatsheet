import { useEffect, useState } from 'react'
import { useI18n } from '@/hooks/useI18n'
import { SECTIONS, GROUPS } from '@/sections'

interface SubHeading {
  id: string
  text: string
}

export default function Sidebar() {
  const { pick, lang } = useI18n()
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id)
  const [activeHeading, setActiveHeading] = useState<string>('')
  const [subBySection, setSubBySection] = useState<Record<string, SubHeading[]>>({})

  // Collect subheadings per section. Re-run on lang change and DOM mutations.
  useEffect(() => {
    const collect = () => {
      const result: Record<string, SubHeading[]> = {}
      for (const sec of SECTIONS) {
        const node = document.getElementById(sec.id)
        if (!node) continue
        const h3s = node.querySelectorAll<HTMLElement>('h3[id]')
        result[sec.id] = Array.from(h3s).map((el) => ({
          id: el.id,
          text: (el.textContent ?? el.id).replace(/^[▸▶»]\s*/, '').trim(),
        }))
      }
      setSubBySection(result)
    }
    collect()
    const mo = new MutationObserver(collect)
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    })
    return () => mo.disconnect()
  }, [lang])

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: [0, 0.2, 0.6] }
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Track active subheading (any h3[id] in main)
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>('main h3[id]'))
    if (headings.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveHeading(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [subBySection])

  const groups: ('a' | 'b' | 'c')[] = ['a', 'b', 'c']

  return (
    <nav className="text-[13px] py-4 pr-2">
      <div className="px-2 mb-3 text-[11px] text-fg-mute uppercase tracking-[0.2em]">
        ─── Table of Contents ───
      </div>
      {groups.map((g) => (
        <div key={g} className="mb-4">
          <div className="px-2 mb-1.5 text-[11px] text-magenta/80 uppercase tracking-widest">
            {pick(GROUPS[g])}
          </div>
          <ul className="m-0 p-0 list-none">
            {SECTIONS.filter((s) => s.group === g).map((s) => {
              const isActive = activeSection === s.id
              const subs = subBySection[s.id] ?? []
              return (
                <li key={s.id} className="mb-0.5">
                  <a
                    href={`#${s.id}`}
                    className={`flex items-baseline gap-2 px-2 py-1 rounded hover:bg-cyan/[0.06] transition-colors ${
                      isActive ? 'text-cyan' : 'text-fg-dim hover:text-fg'
                    }`}
                  >
                    <span className={`inline-block w-4 text-[10px] ${isActive ? 'text-cyan' : 'text-fg-mute'}`}>
                      {isActive ? '▊' : `${s.num}.`}
                    </span>
                    <span className="truncate">{pick(s.title)}</span>
                  </a>
                  {isActive && subs.length > 0 && (
                    <ul className="m-0 mb-2 ml-6 p-0 list-none border-l border-line/60">
                      {subs.map((h) => {
                        const isCurrent = activeHeading === h.id
                        return (
                          <li key={h.id}>
                            <a
                              href={`#${h.id}`}
                              className={`block pl-3 -ml-px py-1 border-l-2 transition-colors truncate text-[12px] ${
                                isCurrent
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
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
