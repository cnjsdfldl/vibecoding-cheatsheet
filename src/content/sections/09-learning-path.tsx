import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import BiP from '@/components/BiP'
import ConceptCard from '@/components/ConceptCard'
import CardGrid from '@/components/CardGrid'
import Callout from '@/components/Callout'
import { useI18n } from '@/hooks/useI18n'

interface Week {
  num: number
  title: { zh: string; en: string }
  goal: { zh: string; en: string }
  tasks: { zh: string; en: string }[]
  accent: 'cyan' | 'magenta' | 'amber' | 'green'
}

const WEEKS: Week[] = [
  {
    num: 1,
    accent: 'cyan',
    title: { zh: '第 1 周：上手一个工具', en: 'Week 1: Get hands-on with one tool' },
    goal: { zh: '从看视频/读文章，转到自己跑 3 个小任务', en: 'Move from watching tutorials to actually running 3 small tasks' },
    tasks: [
      { zh: '装 Claude Code（或你选定的工具）', en: 'Install Claude Code (or your chosen tool)' },
      { zh: '让它写一个 "今天天气" CLI，跑通', en: 'Have it build a "today\'s weather" CLI; make it run' },
      { zh: '让它给一个开源项目写中文 README，提交 PR', en: 'Have it write a Chinese README for an OSS project; submit a PR' },
      { zh: '让它修一个 GitHub Issue（先选 good-first-issue）', en: 'Have it fix one GitHub issue (start with good-first-issue)' },
    ],
  },
  {
    num: 2,
    accent: 'magenta',
    title: { zh: '第 2 周：建立工作流', en: 'Week 2: Build your workflow' },
    goal: { zh: '从"凭感觉用"转到"按黄金循环用"', en: 'From "winging it" to following the golden loop' },
    tasks: [
      { zh: '为你常用的项目写一份 CLAUDE.md', en: 'Write CLAUDE.md for the project you use most' },
      { zh: '强制自己用 Plan Mode 做一个稍大的功能', en: 'Force yourself to use Plan Mode for a medium feature' },
      { zh: '每次 AI 干活前 commit，干完一段再 commit', en: 'Commit before AI starts, commit after each milestone' },
      { zh: '收集 3 个你自己用着顺手的提示词模板', en: 'Collect 3 prompt templates that work for you' },
    ],
  },
  {
    num: 3,
    accent: 'amber',
    title: { zh: '第 3 周：TDD with AI', en: 'Week 3: TDD with AI' },
    goal: { zh: '让"测试驱动"成为你 vibe-coding 的默认姿势', en: 'Make TDD your default vibe-coding stance' },
    tasks: [
      { zh: '挑一个完整功能，让 AI 先写测试再写实现', en: 'Pick one full feature; have AI write tests first, then implementation' },
      { zh: '让 AI 给现有代码补单测，覆盖率 +20%', en: 'Have AI backfill tests for existing code; +20% coverage' },
      { zh: '让另一个 Agent review 你的 PR，列出问题', en: 'Have a second agent review your PR; list issues' },
      { zh: '试一次"修 bug 前先写复现测试"流程', en: 'Once: "write a failing repro test before fixing the bug"' },
    ],
  },
  {
    num: 4,
    accent: 'green',
    title: { zh: '第 4 周：多 Agent 与 MCP', en: 'Week 4: Multi-agent & MCP' },
    goal: { zh: '解锁"组合拳"', en: 'Unlock the combo moves' },
    tasks: [
      { zh: '用子智能体并行探索一个不熟的代码库', en: 'Use subagents to explore an unfamiliar codebase in parallel' },
      { zh: '配一个 MCP server（filesystem 或 GitHub）', en: 'Configure one MCP server (filesystem or GitHub)' },
      { zh: '让一个 Agent 写代码，另一个 Agent 自动 review', en: 'One agent writes, another agent reviews — chain them' },
      { zh: '回顾这一个月，更新你的 CLAUDE.md', en: 'Retrospect on the month; refresh your CLAUDE.md' },
    ],
  },
]

export default function LearningPath() {
  const { pick } = useI18n()
  return (
    <Section
      id="learning-path"
      num="9"
      title={{ zh: '学习路径', en: 'Learning Path' }}
      subtitle={{ zh: '4 周从零到形成肌肉记忆', en: '4 weeks from zero to muscle memory' }}
    >
      <BiP
        text={{
          zh: '光读不练等于没学。下面是一份 4 周计划——每周一个明确目标，配 4 个动手任务。每天 30 分钟，一个月后你会感觉"AI 编程就是这么一回事"。',
          en: "Reading without doing = nothing learned. Here's a 4-week plan — one goal per week, 4 hands-on tasks each. 30 min/day, and in a month it'll just click.",
        }}
      />

      <Callout variant="tip" title={pick({ zh: '完成标准', en: 'Completion criteria' })}>
        {pick({
          zh: '"完成"=能在下一周不查资料把同类任务再做一遍。不是"我看过了"。',
          en: '"Done" = can redo a similar task next week without notes. Not "I read it".',
        })}
      </Callout>

      <SubHeading id="weeks" title={{ zh: '四周计划', en: 'The 4-week plan' }} />
      <CardGrid min={300}>
        {WEEKS.map((w) => (
          <ConceptCard
            key={w.num}
            accent={w.accent}
            title={pick(w.title)}
            tag={`Week ${w.num}`}
            subtitle={pick(w.goal)}
          >
            <ul className="m-0 p-0 list-none space-y-1.5">
              {w.tasks.map((task, i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="text-fg-mute select-none">[ ]</span>
                  <span>{pick(task)}</span>
                </li>
              ))}
            </ul>
          </ConceptCard>
        ))}
      </CardGrid>

      <Callout variant="note" title={pick({ zh: '一个月之后', en: 'After one month' })}>
        {pick({
          zh: '你应该能：① 用一句话讲清 Token / Context / Agent / MCP；② 看到任何项目能 30 分钟内写好它的 CLAUDE.md；③ 自然地用 Plan Mode + 小步 commit；④ 知道什么时候不该用 AI。',
          en: "You should be able to: ① explain Token / Context / Agent / MCP in one sentence each; ② write a CLAUDE.md for any project in 30 minutes; ③ naturally use Plan Mode + small commits; ④ know when *not* to use AI.",
        })}
      </Callout>
    </Section>
  )
}
