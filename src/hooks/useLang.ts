import { useEffect, useState } from 'react'
import type { Lang } from '@/i18n/types'

const KEY = 'vibe.lang'

function detectInitial(): Lang {
  if (typeof window === 'undefined') return 'zh'
  const stored = window.localStorage.getItem(KEY) as Lang | null
  if (stored === 'zh' || stored === 'en') return stored
  const nav = navigator.language || 'zh'
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function useLang() {
  const [lang, setLangState] = useState<Lang>(detectInitial)

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    window.localStorage.setItem(KEY, lang)
  }, [lang])

  return [lang, setLangState] as const
}
