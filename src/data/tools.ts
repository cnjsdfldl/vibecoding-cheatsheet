import type { BiText } from '@/i18n/types'

export interface Tool {
  name: string
  kind: BiText
  summary: BiText
  bestFor: BiText
  url?: string
  tags: string[]
  accent?: 'cyan' | 'magenta' | 'amber' | 'green'
}

export const TOOLS: Tool[] = [
  {
    name: 'Claude Code',
    kind: { zh: '终端 Agent / CLI', en: 'Terminal Agent / CLI' },
    summary: {
      zh: 'Anthropic 官方 CLI Agent，能读写文件、跑命令、自管 Todo。Plan 模式、子智能体、Hooks 一应俱全。',
      en: 'Anthropic official CLI agent. Reads/writes files, runs commands, manages todos. Plan mode, subagents, hooks built in.',
    },
    bestFor: { zh: '大改造、长任务、自动化工作流', en: 'Big refactors, long-running tasks, automation' },
    url: 'https://claude.com/claude-code',
    tags: ['cli', 'agent', 'claude'],
    accent: 'cyan',
  },
  {
    name: 'Open Code',
    kind: { zh: '开源 CLI Agent', en: 'Open-source CLI agent' },
    summary: {
      zh: '开源 CLI agent，可对接多家模型（Claude / GPT / 本地模型）。',
      en: 'Open-source CLI agent compatible with multiple providers (Claude / GPT / local).',
    },
    bestFor: { zh: '想要可控、可定制、可自部署的场景', en: 'When you want self-hosted, customizable agents' },
    tags: ['cli', 'open-source'],
    accent: 'green',
  },
  {
    name: 'OpenClaw',
    kind: { zh: 'Vibe-coding 速查/工具', en: 'Vibe-coding utility' },
    summary: {
      zh: '面向 vibe-coding 的速查/工具集合，强调高密度的 cheatsheet 体验。',
      en: 'A vibe-coding utility/cheatsheet collection with dense reference UX.',
    },
    bestFor: { zh: '查阅命令/技巧的快速参考', en: 'Quick reference for commands and tricks' },
    url: 'https://openclawcheatsheet.com/',
    tags: ['cheatsheet', 'reference'],
    accent: 'amber',
  },
  {
    name: 'Hermes',
    kind: { zh: 'Agent / 助手', en: 'Agent / Assistant' },
    summary: {
      zh: '用户指定的 Vibe-coding 工具（具体定位以官方文档为准）。',
      en: 'A user-specified vibe-coding agent (see official docs for positioning).',
    },
    bestFor: { zh: '团队约定的标准工具链', en: 'Team-standard toolchain' },
    tags: ['agent'],
    accent: 'magenta',
  },
  {
    name: 'Cursor',
    kind: { zh: 'AI 优先 IDE', en: 'AI-first IDE' },
    summary: {
      zh: '基于 VSCode 的 AI IDE，内联补全 + Chat + Agent 模式都强。',
      en: 'VSCode fork with strong inline completion, Chat, and Agent mode.',
    },
    bestFor: { zh: '需要图形界面 + 文件树 + 即时编辑预览', en: 'When you need GUI + file tree + live edits' },
    url: 'https://cursor.com',
    tags: ['ide', 'cursor'],
    accent: 'cyan',
  },
  {
    name: 'Windsurf',
    kind: { zh: 'AI IDE', en: 'AI IDE' },
    summary: {
      zh: 'Codeium 出品的 AI IDE，Cascade 模式擅长长链路。',
      en: 'AI IDE by Codeium. Cascade mode excels at long-running tasks.',
    },
    bestFor: { zh: '想试 Cursor 替代品', en: 'Alternative to Cursor' },
    tags: ['ide'],
    accent: 'cyan',
  },
  {
    name: 'Aider',
    kind: { zh: '终端 Pair Programmer', en: 'Terminal pair programmer' },
    summary: {
      zh: '老牌开源 CLI，git-aware，按 diff 工作。轻量、可控。',
      en: 'Veteran open-source CLI. Git-aware, diff-driven. Lightweight and predictable.',
    },
    bestFor: { zh: '严格 diff 流的小型项目', en: 'Small projects with strict diff workflow' },
    url: 'https://aider.chat',
    tags: ['cli', 'open-source', 'git'],
    accent: 'green',
  },
  {
    name: 'Cline',
    kind: { zh: 'VSCode Agent 插件', en: 'VSCode agent extension' },
    summary: {
      zh: 'VSCode 中可直接跑 Agent 的插件，开源、模型可换。',
      en: 'VSCode extension that runs an agent in-editor. Open-source, BYOK.',
    },
    bestFor: { zh: '不想离开 VSCode 又要 Agent 体验', en: 'Stay in VSCode while getting agent UX' },
    tags: ['vscode', 'agent'],
    accent: 'green',
  },
]
