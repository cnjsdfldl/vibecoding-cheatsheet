import { useEffect, useMemo, useRef, useState } from 'react'
import Fuse from 'fuse.js'
import { useI18n } from '@/hooks/useI18n'
import { SECTIONS } from '@/sections'
import { getSearchIndex, type SearchEntry } from '@/data/search-index'
import { onOpenSearch } from '@/lib/search-bus'

export default function SearchPalette() {
  const { t, lang, pick } = useI18n()
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const entries = useMemo(() => getSearchIndex(lang), [lang])

  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        keys: ['title', 'section', 'keywords', 'body'],
        threshold: 0.4,
        includeMatches: false,
        minMatchCharLength: 1,
      }),
    [entries]
  )

  const results: SearchEntry[] = useMemo(() => {
    if (!q.trim()) return entries.slice(0, 12)
    return fuse.search(q).slice(0, 20).map((r) => r.item)
  }, [q, fuse, entries])

  useEffect(() => {
    return onOpenSearch(() => setOpen(true))
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
        return
      }
      if (e.key === '/' && !open && !isInputFocused()) {
        e.preventDefault()
        setOpen(true)
        return
      }
      if (!open) return
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setCursor((c) => Math.min(c + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setCursor((c) => Math.max(c - 1, 0))
      } else if (e.key === 'Enter') {
        const hit = results[cursor]
        if (hit) jump(hit)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, results, cursor])

  useEffect(() => {
    if (open) {
      setQ('')
      setCursor(0)
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  useEffect(() => setCursor(0), [q])

  function jump(hit: SearchEntry) {
    setOpen(false)
    const target = document.getElementById(hit.anchor || hit.id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${hit.anchor || hit.id}`)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-bg-elev border border-cyan/40 rounded-md shadow-glow-cyan overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-3 h-11 border-b border-line/60 bg-bg-elev2/40">
          <span className="text-amber">$</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="flex-1 bg-transparent outline-none text-fg placeholder:text-fg-mute font-mono text-[14px]"
          />
          <span className="text-[11px] text-fg-mute">esc</span>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {results.length === 0 ? (
            <div className="p-5 text-fg-dim text-[13px]">
              <span className="text-magenta">$ </span>
              {t('searchEmpty')}
            </div>
          ) : (
            <ul className="m-0 p-1 list-none">
              {results.map((r, i) => {
                const sec = SECTIONS.find((s) => s.id === r.id)
                const isActive = i === cursor
                return (
                  <li key={r.anchor || r.id}>
                    <button
                      onMouseEnter={() => setCursor(i)}
                      onClick={() => jump(r)}
                      className={`w-full text-left px-3 py-2 rounded flex items-center gap-3 text-[13px] transition-colors ${
                        isActive ? 'bg-cyan/[0.1] text-fg' : 'text-fg/80 hover:bg-cyan/[0.06]'
                      }`}
                    >
                      <span className={`w-6 text-[10px] tracking-wider ${isActive ? 'text-cyan' : 'text-fg-mute'}`}>
                        §{sec?.num ?? '-'}
                      </span>
                      <span className="flex-1 truncate">{r.title}</span>
                      <span className="text-[10px] text-fg-mute truncate max-w-[40%]">
                        {sec ? pick(sec.title) : ''}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        <div className="flex items-center justify-between px-3 h-7 text-[10px] text-fg-mute border-t border-line/60 bg-bg-elev2/40">
          <span>{t('searchHint')}</span>
          <span>{results.length} matches</span>
        </div>
      </div>
    </div>
  )
}

function isInputFocused() {
  const el = document.activeElement
  if (!el) return false
  const tag = el.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || (el as HTMLElement).isContentEditable
}
