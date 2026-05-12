import type { Lang } from './types'

const dict = {
  appTitle: { zh: 'Vibe Coding 速查表', en: 'Vibe Coding CheatSheet' },
  appSubtitle: {
    zh: '面向新手的 AI 编程系统性入门',
    en: 'A systematic intro to AI coding for beginners',
  },
  lastUpdated: { zh: '最后更新', en: 'Last Updated' },
  searchPlaceholder: { zh: '$ search docs...', en: '$ search docs...' },
  searchHint: { zh: '按 ↑↓ 选择 · Enter 跳转 · Esc 关闭', en: '↑↓ to navigate · Enter to jump · Esc to close' },
  searchEmpty: { zh: 'bash: 没有匹配的条目', en: 'bash: no matches found' },
  onThisPage: { zh: '本页目录', en: 'On this page' },
  copy: { zh: '复制', en: 'COPY' },
  copied: { zh: '已复制', en: 'COPIED' },
  tip: { zh: '小贴士', en: 'TIP' },
  warning: { zh: '警告', en: 'WARN' },
  antiPattern: { zh: '反模式', en: 'ANTI-PATTERN' },
  note: { zh: '备注', en: 'NOTE' },
  beginner: { zh: '新手', en: 'Beginner' },
  intermediate: { zh: '进阶', en: 'Intermediate' },
  advanced: { zh: '高级', en: 'Advanced' },
  scrollTop: { zh: '回到顶部', en: 'Back to top' },
} as const

export type DictKey = keyof typeof dict

export function t(key: DictKey, lang: Lang): string {
  return dict[key][lang]
}

export default dict
