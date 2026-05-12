import type { BiText } from './i18n/types'

export interface SectionMeta {
  id: string
  num: string
  title: BiText
  group: 'a' | 'b' | 'c'
}

export const SECTIONS: SectionMeta[] = [
  { id: 'intro', num: '0', title: { zh: '写在前面', en: 'Introduction' }, group: 'a' },
  { id: 'ai-fundamentals', num: '1', title: { zh: 'AI 基础知识', en: 'AI Fundamentals' }, group: 'a' },
  { id: 'prompt-engineering', num: '2', title: { zh: '提示词工程', en: 'Prompt Engineering' }, group: 'a' },
  { id: 'vibe-101', num: '3', title: { zh: 'Vibe-coding 入门', en: 'Vibe-coding 101' }, group: 'b' },
  { id: 'workflows', num: '4', title: { zh: '核心工作流', en: 'Core Workflows' }, group: 'b' },
  { id: 'tips', num: '5', title: { zh: '进阶技巧', en: 'Tips & Tricks' }, group: 'b' },
  { id: 'anti-patterns', num: '6', title: { zh: '反模式手册', en: 'Anti-Patterns' }, group: 'b' },
  { id: 'quick-ref', num: '7', title: { zh: '速查表', en: 'Quick Reference' }, group: 'c' },
  { id: 'glossary', num: '8', title: { zh: '术语表', en: 'Glossary' }, group: 'c' },
  { id: 'learning-path', num: '9', title: { zh: '学习路径', en: 'Learning Path' }, group: 'c' },
  { id: 'resources', num: '10', title: { zh: '资源链接', en: 'Resources' }, group: 'c' },
]

export const GROUPS: Record<'a' | 'b' | 'c', BiText> = {
  a: { zh: 'A · 入门基础', en: 'A · Foundations' },
  b: { zh: 'B · Vibe-coding 实战', en: 'B · Hands-on' },
  c: { zh: 'C · 参考与查询', en: 'C · Reference' },
}
