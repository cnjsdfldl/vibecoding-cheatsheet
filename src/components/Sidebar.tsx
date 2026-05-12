import { useEffect, useState } from 'react'
import { useI18n } from '@/hooks/useI18n'
import { SECTIONS, GROUPS } from '@/sections'

export default function Sidebar() {
  const { pick } = useI18n()
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: [0, 0.2, 0.6] }
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

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
              const isActive = activeId === s.id
              return (
                <li key={s.id}>
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
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
