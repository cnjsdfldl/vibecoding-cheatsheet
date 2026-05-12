import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import BiP from '@/components/BiP'
import Callout from '@/components/Callout'
import { useI18n } from '@/hooks/useI18n'

interface AntiItem {
  title: { zh: string; en: string }
  why: { zh: string; en: string }
  fix: { zh: string; en: string }
}

const ITEMS: AntiItem[] = [
  {
    title: { zh: '一次让 AI 做太多', en: 'Too much in one shot' },
    why: { zh: '"顺便也 xxx" → 每件都做得半成品，错的地方一片连一片，回滚都不知道回滚到哪。', en: '"Also do xxx" → everything half-baked, errors snowball, you don\'t even know where to revert to.' },
    fix: { zh: '一次只一件可验收的事。多就拆。', en: 'One verifiable thing at a time. Decompose.' },
  },
  {
    title: { zh: '不读 AI 生成的代码', en: "Not reading AI's code" },
    why: { zh: '"能跑就行" 是埋雷。安全漏洞、性能黑洞、依赖陷阱通常长得像「能跑」。', en: '"It runs, ship it" is buried mines. Security holes, perf cliffs, dep traps all look like "runs fine".' },
    fix: { zh: '至少读 diff，遇到看不懂的就问 AI 解释。', en: 'Read every diff. Anything you don\'t understand → ask AI to explain.' },
  },
  {
    title: { zh: '忽略错误消息', en: 'Ignoring error messages' },
    why: { zh: '把错误消息当噪音，盲目让 AI "再试一次"。错误消息往往就是答案。', en: 'Treating errors as noise, blindly "try again". Errors usually ARE the answer.' },
    fix: { zh: '把完整错误（含 stack）贴给 AI，让它先解读再修。', en: 'Paste the full error (with stack) to AI; have it interpret before fixing.' },
  },
  {
    title: { zh: '上下文塞满无关信息', en: 'Stuffing the context with junk' },
    why: { zh: '把整个项目 README、十个文件全塞进去。AI 注意力被稀释，关键信息淹没。', en: 'Cramming whole README + 10 files in. Attention diluted, key signal drowned.' },
    fix: { zh: '只放最相关的 1-3 个文件。让 AI 自己 grep 找其他。', en: 'Include only the 1-3 most relevant files. Let AI grep for the rest itself.' },
  },
  {
    title: { zh: '不写测试', en: 'No tests at all' },
    why: { zh: '没有测试，下次让 AI 改这块就只能凭直觉。回归 bug 会反复出现。', en: 'No tests, next round of edits goes by vibes. Regression bugs come back forever.' },
    fix: { zh: '改一段，至少给一个测试。让 AI 写都行，但必须有。', en: 'Every change → at least one test. Let AI write them, but they must exist.' },
  },
  {
    title: { zh: '让 AI 反复改同一段', en: 'Endless re-fixes on the same code' },
    why: { zh: '改 3 次都不对说明方向错了。不是 AI 笨，是上下文/提示词/前提有问题。', en: 'If 3 fixes miss, the direction is wrong. It\'s not "AI is dumb" — context/prompt/premise is broken.' },
    fix: { zh: '停下，回到 Explore 阶段。换个 Agent 或换个会话重新开始。', en: 'Stop. Back to Explore phase. New agent or new session, fresh start.' },
  },
  {
    title: { zh: '复制网上提示词不看就用', en: 'Pasting random prompts unchanged' },
    why: { zh: '别人的项目背景跟你不一样，盲目套模板会带来不相关甚至矛盾的约束。', en: "Other people's projects don't match yours. Blind copy brings irrelevant or conflicting constraints." },
    fix: { zh: '把模板当骨架，删掉不相干、改掉不准的，再补上你自己的上下文。', en: "Treat templates as skeletons. Delete irrelevant, fix inaccurate, add your own context." },
  },
  {
    title: { zh: '在生产分支直接 vibe', en: 'Vibe-coding directly on main' },
    why: { zh: '没有 branch，没有 commit，AI 改坏了你只能哭。', en: 'No branch, no commit — when AI breaks it, you cry.' },
    fix: { zh: '永远新建 branch。每个可验收 step 一个 commit。', en: 'Always new branch. One commit per verifiable step.' },
  },
  {
    title: { zh: '相信"它说"', en: 'Trusting "AI said so"' },
    why: { zh: '"这个 API 应该这样用" — AI 编出一个不存在的 API。它的语气越自信，越要警惕。', en: '"This API works like..." — AI fabricates a non-existent API. The more confident the tone, the warier you should be.' },
    fix: { zh: '关键 API / 库版本，永远查官方文档或跑代码确认。', en: 'For key APIs / lib versions, always check official docs or run code to verify.' },
  },
  {
    title: { zh: '不维护 CLAUDE.md', en: 'Letting CLAUDE.md rot' },
    why: { zh: '约定改了不更新；AI 还在按老规矩干活，反复犯同样的错。', en: 'Conventions evolved but file didn\'t. AI keeps following stale rules, making the same mistakes.' },
    fix: { zh: '每次发现 AI 犯重复错误，就把规矩写进 CLAUDE.md。把它当活文档。', en: 'Every time AI makes a repeat mistake, add the rule to CLAUDE.md. Treat it as living docs.' },
  },
]

export default function AntiPatterns() {
  const { pick } = useI18n()
  return (
    <Section
      id="anti-patterns"
      num="6"
      title={{ zh: '反模式手册', en: 'Anti-Patterns' }}
      subtitle={{ zh: '看到自己在做这些事，立刻停下', en: 'When you catch yourself doing these — stop immediately' }}
    >
      <BiP
        text={{
          zh: '反模式（Anti-pattern）是"看起来合理但实际有害"的做法。下面 10 个是 vibe-coding 新手最容易踩的坑。',
          en: 'An anti-pattern is something that looks reasonable but is harmful. Below are the 10 traps vibe-coding newbies fall into most.',
        }}
      />

      <SubHeading id="ap-list" title={{ zh: '十大反模式', en: 'Top 10 anti-patterns' }} />

      <div className="space-y-3">
        {ITEMS.map((item, i) => (
          <Callout key={i} variant="anti" title={pick(item.title)}>
            <div className="space-y-1">
              <div>
                <span className="text-magenta">▸ {pick({ zh: '为什么糟', en: 'Why bad' })}：</span>
                <span className="text-fg/85">{pick(item.why)}</span>
              </div>
              <div>
                <span className="text-green">▸ {pick({ zh: '怎么改', en: 'Fix' })}：</span>
                <span className="text-fg/85">{pick(item.fix)}</span>
              </div>
            </div>
          </Callout>
        ))}
      </div>
    </Section>
  )
}
