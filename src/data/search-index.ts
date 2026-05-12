import type { Lang } from '@/i18n/types'
import { SECTIONS } from '@/sections'
import { MODELS } from './models'
import { TOOLS } from './tools'
import { PROMPT_TEMPLATES } from './prompt-templates'
import { GLOSSARY } from './glossary'

export interface SearchEntry {
  id: string
  /** anchor target on the page; falls back to id */
  anchor?: string
  title: string
  section: string
  body: string
  keywords: string
}

export function getSearchIndex(lang: Lang): SearchEntry[] {
  const entries: SearchEntry[] = []

  for (const s of SECTIONS) {
    entries.push({
      id: s.id,
      anchor: s.id,
      title: `§${s.num} ${s[`title`][lang]}`,
      section: s.title[lang],
      body: '',
      keywords: `${s.num} ${s.title.zh} ${s.title.en}`,
    })
  }

  for (const m of MODELS) {
    entries.push({
      id: 'quick-ref',
      anchor: 'quick-ref',
      title: m.name,
      section: lang === 'zh' ? '模型对比' : 'Models',
      body: m.notes[lang],
      keywords: `${m.name} ${m.vendor} ${m.tags.join(' ')}`,
    })
  }

  for (const tool of TOOLS) {
    entries.push({
      id: 'vibe-101',
      anchor: 'tools-overview',
      title: tool.name,
      section: lang === 'zh' ? '工具' : 'Tools',
      body: tool.summary[lang],
      keywords: `${tool.name} ${tool.kind[lang]} ${tool.tags.join(' ')}`,
    })
  }

  for (const p of PROMPT_TEMPLATES) {
    entries.push({
      id: 'prompt-engineering',
      anchor: 'prompt-templates',
      title: p.title[lang],
      section: lang === 'zh' ? '提示词模板' : 'Templates',
      body: p.scenario[lang],
      keywords: `${p.title.zh} ${p.title.en} ${p.tags.join(' ')}`,
    })
  }

  for (const g of GLOSSARY) {
    entries.push({
      id: 'glossary',
      anchor: `g-${g.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      title: g.term,
      section: lang === 'zh' ? '术语' : 'Glossary',
      body: g.def[lang],
      keywords: `${g.term} ${g.aliases?.join(' ') ?? ''}`,
    })
  }

  return entries
}
