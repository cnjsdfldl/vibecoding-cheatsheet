import { createContext, useContext } from 'react'
import type { Lang, BiText } from '@/i18n/types'
import { t as translate, type DictKey } from '@/i18n/dict'

interface I18nCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: DictKey) => string
  pick: (bi: BiText) => string
}

export const I18nContext = createContext<I18nCtx | null>(null)

export function useI18n(): I18nCtx {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export function makePick(lang: Lang) {
  return (bi: BiText) => bi[lang]
}

export function makeT(lang: Lang) {
  return (key: DictKey) => translate(key, lang)
}
