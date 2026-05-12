import type { BiText } from '@/i18n/types'

export interface Model {
  name: string
  vendor: string
  context: string
  strengths: BiText
  notes: BiText
  tags: string[]
  accent?: 'cyan' | 'magenta' | 'amber' | 'green'
}

export const MODELS: Model[] = [
  {
    name: 'Claude Opus 4.7',
    vendor: 'Anthropic',
    context: '200K',
    strengths: { zh: '推理、编码、Agent 长链路任务', en: 'Reasoning, coding, long-running agents' },
    notes: {
      zh: '当前最强 Agent 模型之一，Claude Code 默认主力。适合复杂代码改造与多步工作流。',
      en: 'Top-tier agent model. Default in Claude Code. Strong on complex refactors and multi-step workflows.',
    },
    tags: ['agent', 'coding', 'reasoning'],
    accent: 'cyan',
  },
  {
    name: 'Claude Sonnet 4.6',
    vendor: 'Anthropic',
    context: '200K',
    strengths: { zh: '速度与质量平衡，日常编码主力', en: 'Balanced speed/quality, daily coding driver' },
    notes: {
      zh: '比 Opus 更快、更便宜，日常补全/重构首选。',
      en: 'Faster and cheaper than Opus. Go-to for daily completion and refactoring.',
    },
    tags: ['coding', 'balanced'],
    accent: 'cyan',
  },
  {
    name: 'Claude Haiku 4.5',
    vendor: 'Anthropic',
    context: '200K',
    strengths: { zh: '极速、低成本，适合批量与子任务', en: 'Fastest & cheapest; great for batch & subtasks' },
    notes: {
      zh: '用于子智能体、内联补全、批量整理。质量略低于 Sonnet。',
      en: 'Use for subagents, inline completion, batch jobs. Slightly below Sonnet in quality.',
    },
    tags: ['fast', 'cheap', 'subagent'],
    accent: 'green',
  },
  {
    name: 'GPT-5 / GPT-4.1',
    vendor: 'OpenAI',
    context: '128K+',
    strengths: { zh: '通用对话、生态成熟', en: 'General chat, mature ecosystem' },
    notes: {
      zh: '生态最广，工具/插件多。代码能力扎实但在 Agent 长链路上略逊 Claude。',
      en: 'Largest ecosystem and plugin support. Strong coding; trails Claude on long-running agent tasks.',
    },
    tags: ['general', 'ecosystem'],
    accent: 'magenta',
  },
  {
    name: 'Gemini 2.5 Pro',
    vendor: 'Google',
    context: '1M+',
    strengths: { zh: '超长上下文、多模态', en: 'Massive context window, multimodal' },
    notes: {
      zh: '1M+ token 上下文，适合整库级别检索。多模态（图、视频、音频）支持成熟。',
      en: '1M+ token context — great for whole-repo retrieval. Strong multimodal support.',
    },
    tags: ['long-context', 'multimodal'],
    accent: 'magenta',
  },
  {
    name: 'DeepSeek V4',
    vendor: 'DeepSeek',
    context: '128K',
    strengths: { zh: '新一代旗舰：推理、编码、中文进一步增强', en: 'Latest flagship: stronger reasoning, coding, and Chinese' },
    notes: {
      zh: 'DeepSeek 最新一代主力模型，相对 V3 在长链路推理与代码任务上提升明显，开源生态友好，价格仍具竞争力。',
      en: "DeepSeek's latest flagship. Notably better than V3 on long-chain reasoning and coding tasks. Open ecosystem; pricing still competitive.",
    },
    tags: ['open', 'reasoning', 'cn', 'flagship'],
    accent: 'amber',
  },
  {
    name: 'DeepSeek V3 / R1',
    vendor: 'DeepSeek',
    context: '128K',
    strengths: { zh: '开源权重、推理强、中文友好', en: 'Open weights, strong reasoning, CN-friendly' },
    notes: {
      zh: 'R1 系列推理出色且开源，国内访问便利、价格友好。',
      en: 'R1 line excels at reasoning and is open-source. Convenient access and pricing in China.',
    },
    tags: ['open', 'reasoning', 'cn'],
    accent: 'amber',
  },
  {
    name: 'Qwen3 / QwQ',
    vendor: 'Alibaba',
    context: '128K+',
    strengths: { zh: '中文 SOTA、开源生态', en: 'Chinese SOTA, open ecosystem' },
    notes: {
      zh: '中文能力领先，本地部署可选 4B–72B 各种规模。',
      en: 'Leading Chinese capability. Self-hostable from 4B to 72B+.',
    },
    tags: ['open', 'cn', 'self-host'],
    accent: 'amber',
  },
]
