import type { BiText } from '@/i18n/types'

export interface PromptTpl {
  id: string
  title: BiText
  scenario: BiText
  template: string
  notes?: BiText
  tags: string[]
}

export const PROMPT_TEMPLATES: PromptTpl[] = [
  {
    id: 'gold-structure',
    title: { zh: '黄金结构模板', en: 'Golden Structure' },
    scenario: { zh: '任何需要严肃产出的提示词', en: 'Any serious prompt' },
    template: `# 角色 / Role
你是一名 [资深 React 工程师 / 文案专家 / ...]，擅长 [...]。

# 任务 / Task
我需要你完成：[一句话目标]。

# 上下文 / Context
- 项目背景：...
- 已有约束：...
- 相关文件：@src/xxx

# 输出格式 / Format
- 输出格式：[Markdown / JSON / 代码块]
- 必须包含：[字段 A, 字段 B, ...]

# 约束 / Constraints
- 不要：[反例 1, 反例 2]
- 必须：[正例 1, 正例 2]`,
    notes: {
      zh: '把"角色 + 任务 + 上下文 + 格式 + 约束"五要素都讲清楚，AI 失误率会显著下降。',
      en: 'Stating Role + Task + Context + Format + Constraints up-front cuts the failure rate sharply.',
    },
    tags: ['structure', 'general'],
  },
  {
    id: 'code-gen',
    title: { zh: '代码生成', en: 'Code Generation' },
    scenario: { zh: '从需求生成一个新模块', en: 'Generate a new module from a requirement' },
    template: `请用 [TypeScript / Python] 实现一个 [函数名]，功能是 [...]。

要求：
1. 给出完整可运行的代码
2. 使用 [指定库 / 风格]，不要引入额外依赖
3. 包含类型注解 / docstring
4. 在末尾给 3 个使用示例

不要给我多个方案，只输出你认为最好的那一个。`,
    tags: ['code', 'generate'],
  },
  {
    id: 'debug',
    title: { zh: 'Bug 定位', en: 'Debug Triage' },
    scenario: { zh: '不知道 bug 出在哪里', en: "Don't know where the bug is" },
    template: `我遇到一个 bug，现象是：
[现象描述]

我已经确认的事实：
- ...
- ...

我已经排除的可能：
- ...
- ...

相关代码：
\`\`\`
[贴代码]
\`\`\`

请：
1. 列出最可能的 3 个原因，按概率排序
2. 对每个原因，给出一个最低成本的验证方法
3. 不要直接给修复代码，先帮我定位`,
    notes: {
      zh: '让 AI 先「想」再「做」，能避免它马上修一个不存在的问题。',
      en: 'Force AI to diagnose before fixing — prevents it from "fixing" a non-existent issue.',
    },
    tags: ['debug'],
  },
  {
    id: 'refactor',
    title: { zh: '重构 / 整理', en: 'Refactor' },
    scenario: { zh: '把一段烂代码改干净', en: 'Clean up messy code' },
    template: `请重构下面这段代码：
\`\`\`
[贴代码]
\`\`\`

要求：
- 保留外部行为完全一致（接口签名、副作用）
- 拆分超过 30 行的函数
- 移除重复
- 给变量起更有意义的名字
- 在结尾用一句话总结主要改动

只改动我贴出的代码，不要改我没贴出来的地方。`,
    tags: ['refactor'],
  },
  {
    id: 'review',
    title: { zh: '代码评审', en: 'Code Review' },
    scenario: { zh: '让 AI 当评审人', en: 'Use AI as a reviewer' },
    template: `请作为一名严苛但建设性的 senior engineer，评审下面的改动：
\`\`\`diff
[贴 diff]
\`\`\`

请按下面的角度列出问题（每个 ≤ 1 行）：
- 正确性 / Correctness
- 边界 / Edge cases
- 性能 / Performance
- 安全 / Security
- 可读性 / Readability
- 测试 / Test coverage

不要客套话，没问题的项写 "OK"。`,
    tags: ['review'],
  },
  {
    id: 'tests',
    title: { zh: '生成单元测试', en: 'Generate Unit Tests' },
    scenario: { zh: '为已有函数补测试', en: 'Backfill tests for an existing function' },
    template: `请为下面这个函数写单测：
\`\`\`
[贴代码]
\`\`\`

用 [Vitest / Pytest]。
覆盖：
1. 正常路径（happy path）
2. 边界值（空、最大、最小、负数）
3. 错误路径（异常、非法输入）
4. 1 个我没想到的 edge case（在注释里写为什么）`,
    tags: ['test'],
  },
  {
    id: 'explain',
    title: { zh: '解释代码', en: 'Explain Code' },
    scenario: { zh: '看不懂别人的代码', en: "Don't understand foreign code" },
    template: `请解释下面这段代码：
\`\`\`
[贴代码]
\`\`\`

按下面的层次回答：
1. 一句话功能（30 字内）
2. 关键步骤逐行注释（中文）
3. 它的设计意图是什么（why）
4. 我可能踩的坑

不要重复代码原文，只讲我读不出来的信息。`,
    tags: ['explain'],
  },
  {
    id: 'prd-to-code',
    title: { zh: '需求转代码', en: 'PRD → Code Plan' },
    scenario: { zh: '从一段产品需求拆出实现计划', en: 'Turn product requirements into a plan' },
    template: `这是产品需求：
"""
[需求原文]
"""

请：
1. 用 5 句话总结需求的核心
2. 列出 3-5 个澄清问题（必须先回答才能动工的）
3. 给出实现计划：每条 ≤ 1 行，可直接当 commit 标题
4. 标出哪条最有可能卡住

先别写代码。`,
    tags: ['planning', 'prd'],
  },
  {
    id: 'commit',
    title: { zh: '生成 commit message', en: 'Commit Message' },
    scenario: { zh: '写规范的 commit', en: 'Write a conventional commit' },
    template: `请根据下面的 diff 生成 commit message：
\`\`\`diff
[贴 diff]
\`\`\`

要求：
- 遵循 Conventional Commits（feat/fix/refactor/...）
- 标题 ≤ 50 字符，祈使句
- body 解释 "why" 而不是 "what"（diff 已经说了 what）
- 不要加 emoji`,
    tags: ['git'],
  },
  {
    id: 'meta',
    title: { zh: '元提示（让 AI 帮你写提示词）', en: 'Meta-prompt' },
    scenario: { zh: '不知道怎么开口', en: "Don't know how to start" },
    template: `我想让你帮我做 [任务]，但我不确定怎么把需求讲清楚。

请先反问我 5 个最关键的问题（按重要性排序），等我回答完，再产出最终的执行提示词。

不要在我回答之前开始做这个任务。`,
    notes: {
      zh: '当你自己都没想清楚时，让 AI 反过来面试你。',
      en: 'When you yourself are unsure, let the AI interview you first.',
    },
    tags: ['meta'],
  },
]
