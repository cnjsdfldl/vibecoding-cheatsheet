import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import BiP from '@/components/BiP'
import Callout from '@/components/Callout'
import ConceptCard from '@/components/ConceptCard'
import CardGrid from '@/components/CardGrid'
import CodeBlock from '@/components/CodeBlock'
import ComparisonTable from '@/components/ComparisonTable'
import AsciiDivider from '@/components/AsciiDivider'
import { useI18n } from '@/hooks/useI18n'

export default function Workflows() {
  const { pick } = useI18n()
  return (
    <Section
      id="workflows"
      num="4"
      title={{ zh: '核心工作流', en: 'Core Workflows' }}
      subtitle={{
        zh: '会不会 vibe-coding，关键就在这套循环',
        en: 'Whether you "get" vibe-coding hinges on this loop',
      }}
    >
      {/* 4.1 Golden loop */}
      <SubHeading id="golden-loop" num="4.1" title={{ zh: '黄金循环', en: 'The golden loop' }} />

      <CodeBlock filename="loop.txt">{`         ┌──────────────────────────────────────────┐
         │                                          │
         │   ① Explore   ──►   ② Plan               │
         │       ▲                  │               │
         │       │                  ▼               │
         │   ④ Verify   ◄──   ③ Execute             │
         │                                          │
         └──────────────────────────────────────────┘

  ① Explore  ─ 让 AI 先把代码读一遍，搞清楚现状
  ② Plan     ─ 列出做什么、怎么做、有什么风险
  ③ Execute  ─ 按计划改文件、跑命令
  ④ Verify   ─ 跑测试 / Lint / 人工 review，发现问题再回到 ①`}</CodeBlock>

      <CardGrid min={240}>
        <ConceptCard accent="cyan" title="① Explore" subtitle={pick({ zh: '先搞清楚现状', en: 'Map the territory first' })}>
          {pick({
            zh: '让 AI 读相关文件、找已有实现、列出风险。"先别动手"是 90% 失败案例的解药。',
            en: 'Let AI read relevant files, find existing implementations, list risks. "Don\'t code yet" is the antidote to 90% of failures.',
          })}
        </ConceptCard>
        <ConceptCard accent="magenta" title="② Plan" subtitle={pick({ zh: '把方案讲给你听', en: 'Show me the plan first' })}>
          {pick({
            zh: '产出一份可被你 review 的计划：会改哪些文件、为什么这么改、有什么替代方案。',
            en: 'Produce a reviewable plan: which files, why, alternatives. You approve before any edits.',
          })}
        </ConceptCard>
        <ConceptCard accent="amber" title="③ Execute" subtitle={pick({ zh: '按计划改', en: 'Execute as planned' })}>
          {pick({
            zh: '小步改、勤 commit。一发现偏离计划，停下来重新对齐。',
            en: 'Small steps, frequent commits. The moment it strays, pause and realign.',
          })}
        </ConceptCard>
        <ConceptCard accent="green" title="④ Verify" subtitle={pick({ zh: '人 + 机器双重验证', en: 'Human + machine' })}>
          {pick({
            zh: '机器跑测试 / Lint / typecheck；人读 diff 看意图。两者都过才算完。',
            en: 'Machine runs tests / lint / typecheck; human reads diff for intent. Both must pass.',
          })}
        </ConceptCard>
      </CardGrid>

      {/* 4.2 Context files */}
      <SubHeading id="context-files" num="4.2" title={{ zh: '项目上下文文件', en: 'Project context files' }} />
      <BiP
        text={{
          zh: '把项目的「规矩」「常识」「不能踩的坑」写进一个固定文件，AI 启动时自动加载——这是把 vibe-coding 从「碰运气」变「可重复」的关键。',
          en: 'Write the project\'s rules, conventions, and landmines into a fixed file the AI auto-loads. This is what turns vibe-coding from "lucky" into "repeatable".',
        }}
      />
      <ComparisonTable
        columns={[
          { key: 'file', header: 'File', className: 'text-cyan font-semibold' },
          { key: 'tool', header: 'Tool', className: 'text-fg-dim' },
          { key: 'note', header: pick({ zh: '说明', en: 'Notes' }) },
        ]}
        rows={[
          { file: 'CLAUDE.md', tool: 'Claude Code', note: pick({ zh: '放仓库根目录，会自动加载到系统提示词', en: 'At repo root, auto-loaded into the system prompt' }) },
          { file: 'AGENTS.md', tool: pick({ zh: '多 Agent 通用约定', en: 'Multi-agent convention' }), note: pick({ zh: 'OpenAI 起的事实标准，多个工具兼容', en: 'De-facto standard popularized by OpenAI; many tools support it' }) },
          { file: '.cursorrules', tool: 'Cursor', note: pick({ zh: 'Cursor 的项目规则文件', en: "Cursor's project-rules file" }) },
          { file: '.windsurfrules', tool: 'Windsurf', note: pick({ zh: 'Windsurf 的规则文件', en: "Windsurf's rules file" }) },
        ]}
      />

      <CodeBlock filename="CLAUDE.md" lang="md">{`# Project: My Awesome App

## Stack
- Frontend: Next.js 15 + TypeScript + Tailwind v4
- Backend: Node.js 22 + Hono + Postgres + Drizzle
- Tests: Vitest + Playwright

## Conventions
- 中文注释优先，代码标识符英文
- API 路由放 \`app/api/\` 下，每个 route 必须写 zod schema 校验
- 数据库 schema 改动一定走 migration，不直接改 schema.ts
- 不要引入新的 utility 库（比如 lodash），优先用原生

## Don'ts
- 不要用 axios，用 fetch
- 不要写 default export
- 不要在组件里直接 fetch；用 server actions / route handlers

## Run / Test
- \`pnpm dev\` 启动
- \`pnpm test\` 跑单测，必须全绿才能 commit
- \`pnpm e2e\` 跑端到端，PR 前手动跑

## When you finish a task
1. 跑 \`pnpm typecheck && pnpm test\`
2. 用 conventional commits 格式写 commit message`}</CodeBlock>

      <Callout variant="tip" title={pick({ zh: 'CLAUDE.md 写法心法', en: 'How to write a good CLAUDE.md' })}>
        {pick({
          zh: '保持 < 200 行。只写"AI 不知道、但你希望它知道"的东西。把"可读出来的常识"（语言、框架名）省掉，把"独有的约定 / 历史包袱 / 必踩的坑"写厚。',
          en: 'Keep < 200 lines. Only write things AI can\'t infer from the code. Skip obvious facts (language, framework). Spend the space on unique conventions, legacy quirks, must-avoid pitfalls.',
        })}
      </Callout>

      <AsciiDivider label="decomposition" />

      {/* 4.3 Decomposition */}
      <SubHeading id="decomposition" num="4.3" title={{ zh: '任务拆分原则', en: 'Decomposition principles' }} />
      <CardGrid min={260}>
        <ConceptCard accent="cyan" title={pick({ zh: '单一目标', en: 'Single goal' })}>
          {pick({ zh: '一次只让 AI 做一件可验收的事。"顺便也…" 是诅咒。', en: 'One verifiable thing per round. "Also..." is a curse.' })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '可验证', en: 'Verifiable' })}>
          {pick({
            zh: '每一步结束都能跑测试 / 跑命令 / 看输出确认对错。"看起来对"不算。',
            en: 'Every step ends with a runnable check (test / command / output). "Looks right" doesn\'t count.',
          })}
        </ConceptCard>
        <ConceptCard accent="amber" title={pick({ zh: '可回滚', en: 'Reversible' })}>
          {pick({
            zh: '每一步独立 commit。出问题 git reset --hard HEAD~1 就走人。',
            en: 'Each step is its own commit. If broken, git reset --hard HEAD~1 and walk away.',
          })}
        </ConceptCard>
      </CardGrid>

      {/* 4.4 Verification */}
      <SubHeading id="verification" num="4.4" title={{ zh: '验证策略', en: 'Verification' }} />
      <ComparisonTable
        columns={[
          { key: 'method', header: pick({ zh: '方法', en: 'Method' }), className: 'text-cyan' },
          { key: 'when', header: pick({ zh: '什么时候用', en: 'When' }) },
          { key: 'cost', header: pick({ zh: '成本', en: 'Cost' }) },
        ]}
        rows={[
          {
            method: pick({ zh: '自动化测试', en: 'Automated tests' }),
            when: pick({ zh: '所有逻辑改动', en: 'Any logic change' }),
            cost: pick({ zh: '低（一次写多次跑）', en: 'Low (write once, run forever)' }),
          },
          {
            method: 'Typecheck / Lint',
            when: pick({ zh: '每次保存 / 提交前', en: 'On save / before commit' }),
            cost: pick({ zh: '极低', en: 'Trivial' }),
          },
          {
            method: pick({ zh: '人工 read diff', en: 'Human reads diff' }),
            when: pick({ zh: '任何 AI 改动', en: 'Any AI-authored change' }),
            cost: pick({ zh: '中（必要）', en: 'Medium (mandatory)' }),
          },
          {
            method: pick({ zh: '让另一个 Agent review', en: 'Second-agent review' }),
            when: pick({ zh: 'PR 级、安全敏感、复杂改动', en: 'PR-level / security-sensitive / complex' }),
            cost: pick({ zh: '中（节省人工）', en: 'Medium (saves human time)' }),
          },
          {
            method: pick({ zh: '在真环境跑一次', en: 'Run in real env' }),
            when: pick({ zh: 'UI / 网络 / 数据迁移', en: 'UI / network / migrations' }),
            cost: pick({ zh: '高（无可替代）', en: 'High (irreplaceable)' }),
          },
        ]}
      />

      {/* 4.5 Git */}
      <SubHeading id="git-flow" num="4.5" title={{ zh: 'Git × Vibe-coding', en: 'Git × Vibe-coding' }} />
      <BiP
        text={{
          zh: 'Vibe-coding 时代 Git 不是负担，是安全网。AI 改坏了？git reset。改得不错但想试别的方案？git branch。',
          en: 'In the vibe-coding era Git is a safety net, not a burden. AI broke it? git reset. Result OK but want to try another approach? git branch.',
        }}
      />
      <CardGrid min={240}>
        <ConceptCard accent="cyan" title={pick({ zh: '原则 1', en: 'Rule 1' })}>
          {pick({ zh: '让 AI 干活前，本地必须 clean（git status 干净）', en: 'Before letting AI work, your tree must be clean (git status)' })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '原则 2', en: 'Rule 2' })}>
          {pick({ zh: '一个可验证步骤 = 一个 commit。粒度越细越安全', en: 'One verifiable step = one commit. Smaller granularity = safer' })}
        </ConceptCard>
        <ConceptCard accent="amber" title={pick({ zh: '原则 3', en: 'Rule 3' })}>
          {pick({ zh: '探索性大改用分支，不要污染 main', en: 'Use branches for exploratory big edits — never pollute main' })}
        </ConceptCard>
        <ConceptCard accent="green" title={pick({ zh: '原则 4', en: 'Rule 4' })}>
          {pick({ zh: '走偏了？git restore . 比说"撤销"快', en: 'Off track? `git restore .` beats saying "undo it"' })}
        </ConceptCard>
      </CardGrid>

      {/* 4.6 When to AI vs not */}
      <SubHeading id="when-to-ai" num="4.6" title={{ zh: '什么时候让 AI 做、什么时候自己做', en: 'When AI vs when you' }} />
      <ComparisonTable
        columns={[
          { key: 'type', header: pick({ zh: '任务类型', en: 'Task type' }), className: 'text-cyan' },
          { key: 'ai', header: pick({ zh: 'AI 做', en: 'AI does it' }) },
          { key: 'you', header: pick({ zh: '你做', en: 'You do it' }) },
        ]}
        rows={[
          {
            type: pick({ zh: '样板代码 / CRUD', en: 'Boilerplate / CRUD' }),
            ai: '✓✓✓',
            you: '—',
          },
          {
            type: pick({ zh: '调试已知 bug', en: 'Debugging known bug' }),
            ai: '✓ 先让它列原因',
            you: '✓ 最后定夺',
          },
          {
            type: pick({ zh: '架构设计', en: 'Architecture design' }),
            ai: pick({ zh: '✓ 当陪练', en: '✓ As sparring partner' }),
            you: '✓✓✓',
          },
          {
            type: pick({ zh: '安全 / 加密代码', en: 'Security / crypto code' }),
            ai: pick({ zh: '× 风险高', en: '× Risky' }),
            you: '✓✓✓',
          },
          {
            type: pick({ zh: '生产数据库 migration', en: 'Prod DB migrations' }),
            ai: pick({ zh: '✓ 生成，但你 review', en: '✓ Drafts, you review' }),
            you: '✓ 必须看',
          },
          {
            type: pick({ zh: '业务逻辑大改', en: 'Major business logic' }),
            ai: pick({ zh: '✓ 先出 plan', en: '✓ Plan-mode first' }),
            you: '✓ 拍板',
          },
          {
            type: pick({ zh: '快速原型', en: 'Quick prototype' }),
            ai: '✓✓✓',
            you: '—',
          },
        ]}
      />

      <Callout variant="anti" title={pick({ zh: '反模式：把 AI 当甩手掌柜', en: 'Anti-pattern: total delegation' })}>
        {pick({
          zh: '"我看不懂代码也无所谓，跑通就行" — 这是给自己埋雷。AI 可能写出能跑但有安全漏洞、性能黑洞、依赖陷阱的代码。你至少要能读、能问"为什么这样做"。',
          en: '"I can\'t read code but as long as it runs..." — landmine. AI can ship code that runs but has security holes, perf cliffs, dependency traps. You must at least be able to read and ask "why this way?"',
        })}
      </Callout>
    </Section>
  )
}
