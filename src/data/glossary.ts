import type { BiText } from '@/i18n/types'

export interface Term {
  term: string
  aliases?: string[]
  def: BiText
  analogy?: BiText
}

export const GLOSSARY: Term[] = [
  {
    term: 'LLM',
    aliases: ['大语言模型', 'Large Language Model'],
    def: {
      zh: '基于海量文本训练的神经网络，擅长理解和生成自然语言。',
      en: 'A neural network trained on huge text corpora, good at understanding and generating language.',
    },
    analogy: { zh: '一个读过半个互联网的超级实习生。', en: 'A super-intern who has read half the internet.' },
  },
  {
    term: 'Token',
    def: {
      zh: 'LLM 处理文本的最小单元，约等于一个英文单词或半个汉字。',
      en: 'The smallest unit an LLM processes, roughly a word in English or half a Chinese character.',
    },
    analogy: { zh: 'AI 眼中的"字"。', en: "What counts as a 'word' to the AI." },
  },
  {
    term: 'Context Window',
    aliases: ['上下文窗口'],
    def: {
      zh: 'LLM 一次能"看"和"记"的最大 token 数。超过就会忘。',
      en: 'The maximum tokens an LLM can read/remember at once. Beyond this it "forgets".',
    },
    analogy: { zh: '它的工作记忆容量。', en: 'Its working-memory capacity.' },
  },
  {
    term: 'Temperature',
    def: {
      zh: '采样随机性。0 = 稳定可复现；越高越发散有创意。',
      en: 'Sampling randomness. 0 = deterministic; higher = more creative.',
    },
  },
  {
    term: 'Embedding',
    def: {
      zh: '把一段文本变成一组数字（向量），相似的文本数字也相近。',
      en: 'Turning text into a vector of numbers, where similar texts have similar vectors.',
    },
  },
  {
    term: 'RAG',
    aliases: ['检索增强生成', 'Retrieval-Augmented Generation'],
    def: {
      zh: '先检索相关知识再让 LLM 回答，缓解幻觉、扩展知识。',
      en: 'Retrieve relevant docs first, then let the LLM answer. Reduces hallucination, extends knowledge.',
    },
  },
  {
    term: 'MCP',
    aliases: ['Model Context Protocol'],
    def: {
      zh: 'Anthropic 提出的协议，让 LLM 安全统一地接入外部工具和数据源。',
      en: "Anthropic's protocol for LLMs to safely plug into external tools and data sources.",
    },
    analogy: { zh: '给 AI 装的"USB 接口"。', en: 'A "USB port" for AI.' },
  },
  {
    term: 'Agent',
    aliases: ['智能体'],
    def: {
      zh: '能自己计划、调用工具、反复尝试以完成目标的 AI 程序。',
      en: 'An AI program that plans, calls tools, and iterates to reach a goal.',
    },
  },
  {
    term: 'Tool Use',
    aliases: ['Function Calling'],
    def: {
      zh: 'LLM 输出结构化指令调用外部函数/API 的能力。',
      en: 'Ability of an LLM to call external functions/APIs via structured outputs.',
    },
  },
  {
    term: 'Subagent',
    aliases: ['子智能体'],
    def: {
      zh: '主 Agent 派出的、上下文隔离的子任务执行体。用于并行 / 节省主上下文。',
      en: 'A delegated, context-isolated worker spawned by the main agent. For parallelism or context savings.',
    },
  },
  {
    term: 'Hallucination',
    aliases: ['幻觉'],
    def: {
      zh: 'AI 一本正经胡说八道：编造不存在的函数、API、引用。',
      en: 'When AI fabricates plausible-looking but false content — non-existent functions, APIs, citations.',
    },
  },
  {
    term: 'Few-shot',
    def: {
      zh: '在提示词里直接给几个示例，让 AI 模仿。',
      en: "Showing a few examples in the prompt for the AI to mimic.",
    },
  },
  {
    term: 'CoT',
    aliases: ['Chain-of-Thought', '思维链'],
    def: {
      zh: '让 AI 先逐步思考再给答案，提升复杂任务正确率。',
      en: 'Make the AI think step-by-step before answering. Improves accuracy on hard tasks.',
    },
  },
  {
    term: 'Prompt Injection',
    aliases: ['提示词注入'],
    def: {
      zh: '用户输入或外部内容里藏指令，劫持 AI 行为。',
      en: 'Malicious instructions hidden in user/external content that hijack the AI.',
    },
  },
  {
    term: 'Knowledge Cutoff',
    aliases: ['知识截止日期'],
    def: {
      zh: '模型训练数据的最后日期，之后的事它原生不知道。',
      en: 'Last date covered by training data. Anything after is unknown to the model natively.',
    },
  },
  {
    term: 'Vibe-coding',
    def: {
      zh: 'Karpathy 提出的编程方式：用自然语言描述意图，由 AI 生成并执行代码，人主要负责验证。',
      en: 'Coined by Karpathy: describe intent in natural language, let AI produce/run code, humans mostly verify.',
    },
  },
  {
    term: 'CLAUDE.md',
    def: {
      zh: '项目级别的 AI 指令文件。放在仓库根目录，Claude Code 启动时自动加载。',
      en: 'Project-level AI instructions file. Placed at repo root; Claude Code auto-loads it.',
    },
  },
  {
    term: 'Plan Mode',
    def: {
      zh: 'Claude Code 的只读规划模式，先出方案再执行，避免乱改文件。',
      en: 'Read-only planning mode in Claude Code. Plan first, execute later — prevents accidental edits.',
    },
  },
]
