import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import BiP from '@/components/BiP'
import Callout from '@/components/Callout'
import ConceptCard from '@/components/ConceptCard'
import CardGrid from '@/components/CardGrid'
import AsciiDivider from '@/components/AsciiDivider'
import BiImage from '@/components/BiImage'
import { useI18n } from '@/hooks/useI18n'

export default function Intro() {
  const { pick } = useI18n()
  return (
    <Section
      id="intro"
      num="0"
      title={{ zh: '写在前面', en: 'Introduction' }}
      subtitle={{
        zh: '一份给 AI 编程新手的速查表 ── 从看懂 LLM 到上手 vibe-coding',
        en: 'A cheatsheet for AI coding beginners — from understanding LLMs to hands-on vibe-coding',
      }}
    >
      <BiImage
        name="Introduction"
        alt={{
          zh: 'Vibe Coding 入门示意图',
          en: 'Vibe Coding introduction illustration',
        }}
      />

      <p className="text-fg/90 text-[14px] leading-relaxed">
        <span className="text-amber">$</span>{' '}
        <span className="text-cyan caret">echo "welcome to vibe coding"</span>
      </p>

      <BiP
        text={{
          zh: '你不需要懂神经网络，也不需要写过一万行代码。只要会用电脑、有点好奇心，这份速查表就能带你系统地走完：理解 AI → 写好提示词 → 用 Agent 干活 → 形成自己的工作流。',
          en: 'You don\'t need to understand neural networks or have shipped 10k lines of code. If you can use a computer and you\'re curious, this guide walks you through: understanding AI → writing prompts → working with agents → building your own workflow.',
        }}
      />

      <SubHeading id="how-to-read" title={{ zh: '怎么读这份速查表', en: 'How to read this guide' }} />
      <CardGrid min={260}>
        <ConceptCard accent="cyan" title={pick({ zh: '① 顺序通读', en: '① Read in order' })} tag={pick({ zh: '完整学习', en: 'Full pass' })}>
          {pick({
            zh: '从 §1 开始按章节往下读，约 1-2 小时能建立完整心智模型。',
            en: 'Start from §1 and read in order. ~1-2 hours to build a complete mental model.',
          })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '② 按需查阅', en: '② As-needed lookup' })} tag={pick({ zh: '查字典式', en: 'Dictionary' })}>
          {pick({
            zh: '用 Ctrl+K 全局搜索，把它当字典翻。需要哪段查哪段。',
            en: 'Use Ctrl+K global search. Treat it like a dictionary — open to the page you need.',
          })}
        </ConceptCard>
        <ConceptCard accent="amber" title={pick({ zh: '③ 学习路径打卡', en: '③ Follow the path' })} tag={pick({ zh: '动手为主', en: 'Hands-on' })}>
          {pick({
            zh: '跟着 §9「学习路径」一周一目标，4 周后形成肌肉记忆。',
            en: 'Follow §9 "Learning Path" — one goal per week. 4 weeks to muscle memory.',
          })}
        </ConceptCard>
      </CardGrid>

      <AsciiDivider label="who" />

      <SubHeading id="audience" title={{ zh: '这份速查表适合谁', en: 'Who is this for' }} />

      <CardGrid min={280}>
        <ConceptCard accent="green" title="✓ " subtitle={pick({ zh: '适合', en: 'A good fit' })}>
          <ul className="m-0 pl-4 list-none space-y-1">
            <li>▸ {pick({ zh: '想用 AI 写代码的零基础选手', en: 'Beginners who want to code with AI' })}</li>
            <li>▸ {pick({ zh: '会一点编程但没用过 Agent', en: 'Can code a bit but new to agents' })}</li>
            <li>▸ {pick({ zh: '产品/设计师想自己做原型', en: 'PMs/designers wanting to prototype solo' })}</li>
            <li>▸ {pick({ zh: '需要一份团队内部 onboarding', en: 'Need an internal onboarding doc' })}</li>
          </ul>
        </ConceptCard>
        <ConceptCard accent="magenta" title="✘ " subtitle={pick({ zh: '不适合', en: 'Not for you (yet)' })}>
          <ul className="m-0 pl-4 list-none space-y-1">
            <li>▸ {pick({ zh: '寻找 LLM 原理深入解析', en: 'Looking for LLM internals' })}</li>
            <li>▸ {pick({ zh: '需要模型训练/微调指南', en: 'Need training/fine-tuning guides' })}</li>
            <li>▸ {pick({ zh: '只想要一份提示词复制黏贴', en: 'Just want a prompt copy-paste pack' })}</li>
          </ul>
        </ConceptCard>
      </CardGrid>

      <Callout variant="tip" title={pick({ zh: '小提示', en: 'Pro tip' })}>
        {pick({
          zh: '随时按 Ctrl+K（或斜杠键 /）打开搜索。这是一份高密度的"字典"，搜比翻快。',
          en: 'Press Ctrl+K (or / ) anytime to open search. This is a high-density "dictionary" — searching beats scrolling.',
        })}
      </Callout>
    </Section>
  )
}
