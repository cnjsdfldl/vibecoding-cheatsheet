import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import BiP from '@/components/BiP'
import Callout from '@/components/Callout'
import ConceptCard from '@/components/ConceptCard'
import CardGrid from '@/components/CardGrid'
import CodeBlock from '@/components/CodeBlock'
import AsciiDivider from '@/components/AsciiDivider'
import ComparisonTable from '@/components/ComparisonTable'
import { useI18n } from '@/hooks/useI18n'
import { TOOLS } from '@/data/tools'

export default function Vibe101() {
  const { pick } = useI18n()
  return (
    <Section
      id="vibe-101"
      num="3"
      title={{ zh: 'Vibe-coding 入门', en: 'Vibe-coding 101' }}
      subtitle={{ zh: '从"写代码"到"描述意图"——心态变了，工具就活了', en: 'From "writing code" to "expressing intent" — once the mindset flips, the tools come alive' }}
    >
      <SubHeading id="what-is-vibe" num="3.1" title={{ zh: '什么是 Vibe-coding', en: 'What is vibe-coding' }} />

      <Callout variant="note" title="Andrej Karpathy, 2025">
        {pick({
          zh: '"There\'s a new kind of coding I call vibe coding, where you fully give in to the vibes... I just see things, say things, run things, and copy-paste things, and it mostly works."',
          en: '"There\'s a new kind of coding I call vibe coding, where you fully give in to the vibes... I just see things, say things, run things, and copy-paste things, and it mostly works."',
        })}
      </Callout>

      <BiP
        text={{
          zh: '通俗讲：你不再一行一行敲代码，而是用自然语言描述「我想要什么」，由 AI（Agent）生成、执行、迭代。你的工作变成：构思、引导、验收。',
          en: "Plain version: you stop typing code line by line. You describe what you want in natural language; an AI agent generates, runs, and iterates. Your job: ideate, guide, verify.",
        }}
      />

      <SubHeading id="mindset" num="3.2" title={{ zh: '核心心态转变', en: 'The mindset shift' }} />
      <ComparisonTable
        columns={[
          { key: 'before', header: pick({ zh: '过去（传统编程）', en: 'Before (traditional)' }) },
          { key: 'after', header: pick({ zh: '现在（vibe-coding）', en: 'After (vibe-coding)' }), className: 'text-cyan' },
        ]}
        rows={[
          {
            before: pick({ zh: '我必须会写每一行', en: 'I must write every line' }),
            after: pick({ zh: '我必须能读懂每一行', en: 'I must be able to read every line' }),
          },
          {
            before: pick({ zh: '记 API、记语法', en: 'Memorize APIs & syntax' }),
            after: pick({ zh: '记意图、记验收标准', en: 'Memorize intents & acceptance criteria' }),
          },
          {
            before: pick({ zh: '改一行调一行', en: 'Edit one line, debug one line' }),
            after: pick({ zh: '让 AI 改一段，跑测试看结果', en: 'Let AI edit, run tests, observe results' }),
          },
          {
            before: pick({ zh: '工作产出 = 代码', en: 'Output = code' }),
            after: pick({ zh: '工作产出 = 提示词 + 验证流程', en: 'Output = prompts + verification flow' }),
          },
        ]}
      />

      <Callout variant="warning" title={pick({ zh: '边界', en: 'Boundary' })}>
        {pick({
          zh: 'Vibe-coding 不等于"不看代码"。生产代码 + 不熟领域 + 不读输出 = 灾难。在小型/原型/熟悉领域里大胆 vibe，正式上线前永远要 review。',
          en: "Vibe-coding ≠ 'never read the code'. Production code + unfamiliar domain + not reading output = disaster. Vibe freely in prototypes / familiar areas; always review before shipping prod.",
        })}
      </Callout>

      {/* 3.3 Tools */}
      <SubHeading id="tools-overview" num="3.3" title={{ zh: '工具生态一览', en: 'Tools ecosystem' }} />
      <CardGrid min={300}>
        {TOOLS.map((tool) => (
          <ConceptCard
            key={tool.name}
            title={tool.name}
            subtitle={pick(tool.kind)}
            tag={tool.tags[0]}
            accent={tool.accent}
          >
            <p className="m-0 mb-2">{pick(tool.summary)}</p>
            <div className="text-[11px] text-fg-mute">
              <span className="text-amber">★ </span>
              {pick(tool.bestFor)}
            </div>
            {tool.url && (
              <a href={tool.url} target="_blank" rel="noreferrer" className="block mt-1 text-[11px]">
                → {tool.url.replace(/^https?:\/\//, '')}
              </a>
            )}
          </ConceptCard>
        ))}
      </CardGrid>

      <SubHeading id="picker" num="3.3.1" title={{ zh: '我应该用哪个？', en: 'Which one should I use?' }} />
      <CodeBlock filename="decision-tree.txt">{`┌─ 不想离开命令行？ ─────────────► Claude Code / Open Code / Aider
│
├─ 喜欢图形 IDE + AI 深度集成？ ─► Cursor / Windsurf
│
├─ 已经在 VSCode 不想换？ ───────► Cline (VSCode 插件)
│
├─ 团队有约定工具？ ─────────────► OpenClaw / Hermes / 团队标准
│
└─ 不知道，选一个就开始 ─────────► Claude Code（推荐起点）

原则：选一个，深度用 2 周，再判断要不要换。
       别同时试 5 个，那叫"选型 procrastination"。`}</CodeBlock>

      <AsciiDivider label="first run" />

      {/* 3.4 First time */}
      <SubHeading id="first-time" num="3.4" title={{ zh: '你的第一次 Vibe-coding（5 分钟）', en: 'Your first vibe-coding session (5 min)' }} />

      <CodeBlock filename="step-1.sh" lang="bash">{`# 1. 安装 Claude Code（一行）
npm install -g @anthropic-ai/claude-code

# 2. 找一个空目录
mkdir my-first-vibe && cd my-first-vibe

# 3. 启动
claude`}</CodeBlock>

      <CodeBlock filename="step-2-prompt.md" lang="md">{`# 4. 给它第一个任务（在 Claude Code 里输入）
帮我创建一个 Python CLI 工具，叫 "today"：
- 接受一个城市名作为参数
- 输出该城市今天的日期、星期几
- 如果不传参数，默认显示本机时区
- 不要引入除标准库以外的依赖
- 附带一个 README，说明安装和用法`}</CodeBlock>

      <BiP
        text={{
          zh: '观察它会：① 制定 Todo 列表 ② 创建文件 ③ 试着跑一下验证 ④ 调整 ⑤ 报告完成。这就是 Agent 的「计划-执行-验证」循环。',
          en: 'Watch it: ① draft a todo list ② create files ③ run to verify ④ adjust ⑤ report done. That\'s the Agent\'s plan → execute → verify loop.',
        }}
      />

      <Callout variant="tip" title={pick({ zh: '接着做', en: 'Next steps' })}>
        {pick({
          zh: '跑通后，让它 ① 加一个 "明天的日期" 选项 ② 写 3 个单测 ③ 生成 commit message。把工作流走完整。',
          en: 'Once it works, have it ① add "tomorrow\'s date" option ② write 3 unit tests ③ generate the commit message. Walk through the full flow.',
        })}
      </Callout>
    </Section>
  )
}
