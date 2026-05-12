import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import ConceptCard from '@/components/ConceptCard'
import CardGrid from '@/components/CardGrid'
import { useI18n } from '@/hooks/useI18n'

interface Resource {
  title: string
  url: string
  desc: { zh: string; en: string }
  tag?: string
  accent?: 'cyan' | 'magenta' | 'amber' | 'green'
}

const OFFICIAL: Resource[] = [
  { title: 'Claude Code Docs', url: 'https://docs.claude.com/en/docs/claude-code', desc: { zh: 'Claude Code 官方文档', en: 'Official Claude Code docs' }, accent: 'cyan' },
  { title: 'Anthropic API Docs', url: 'https://docs.claude.com/en/api', desc: { zh: 'Anthropic API 参考', en: 'Anthropic API reference' }, accent: 'cyan' },
  { title: 'Cursor Docs', url: 'https://docs.cursor.com', desc: { zh: 'Cursor 文档', en: 'Cursor docs' }, accent: 'cyan' },
  { title: 'MCP Spec', url: 'https://modelcontextprotocol.io', desc: { zh: 'Model Context Protocol 规范', en: 'Model Context Protocol spec' }, accent: 'magenta' },
  { title: 'OpenAI Platform', url: 'https://platform.openai.com/docs', desc: { zh: 'OpenAI API 文档', en: 'OpenAI API docs' }, accent: 'cyan' },
  { title: 'OpenClaw CheatSheet', url: 'https://openclawcheatsheet.com/', desc: { zh: 'OpenClaw 速查（本页风格参考）', en: 'OpenClaw cheatsheet (style inspiration)' }, accent: 'amber' },
]

const READS: Resource[] = [
  { title: 'Andrej Karpathy — Vibe Coding', url: 'https://x.com/karpathy/status/1886192184808149383', desc: { zh: 'Vibe-coding 一词的起源推', en: "The tweet that coined 'vibe coding'" }, accent: 'magenta' },
  { title: 'Anthropic — Building effective agents', url: 'https://www.anthropic.com/engineering/building-effective-agents', desc: { zh: '官方 Agent 设计模式总结', en: 'Anthropic\'s agent design patterns' }, accent: 'cyan' },
  { title: 'Simon Willison — Blog', url: 'https://simonwillison.net/', desc: { zh: 'AI 工具 / LLM 应用一线博客', en: 'Front-line blog on LLM applications' }, accent: 'amber' },
  { title: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai/', desc: { zh: '系统的提示词工程教程', en: 'Systematic prompt-engineering guide' }, accent: 'cyan' },
]

const COMMUNITY: Resource[] = [
  { title: 'r/ClaudeAI', url: 'https://www.reddit.com/r/ClaudeAI/', desc: { zh: 'Claude / Claude Code 用户社区', en: 'Claude / Claude Code user community' }, accent: 'magenta' },
  { title: 'r/LocalLLaMA', url: 'https://www.reddit.com/r/LocalLLaMA/', desc: { zh: '本地模型与开源 LLM 社区', en: 'Local & open-weights LLM community' }, accent: 'amber' },
  { title: 'Anthropic Discord', url: 'https://discord.gg/anthropic', desc: { zh: '官方 Discord', en: 'Official Discord' }, accent: 'cyan' },
  { title: 'V2EX · AI 节点', url: 'https://www.v2ex.com/go/ai', desc: { zh: '中文开发者讨论', en: 'Chinese developer discussions' }, accent: 'green' },
]

function Cards({ items }: { items: Resource[] }) {
  const { pick } = useI18n()
  return (
    <CardGrid min={280}>
      {items.map((r) => (
        <ConceptCard key={r.url} accent={r.accent} title={r.title} tag={r.tag}>
          <p className="m-0">{pick(r.desc)}</p>
          <a href={r.url} target="_blank" rel="noreferrer" className="block mt-1 text-[11px] truncate">
            → {r.url.replace(/^https?:\/\//, '')}
          </a>
        </ConceptCard>
      ))}
    </CardGrid>
  )
}

export default function Resources() {
  return (
    <Section
      id="resources"
      num="10"
      title={{ zh: '资源链接', en: 'Resources' }}
      subtitle={{ zh: '想往深了走？从这些开始', en: 'Want to go deeper? Start here' }}
    >
      <SubHeading id="r-official" title={{ zh: '官方文档', en: 'Official docs' }} />
      <Cards items={OFFICIAL} />

      <SubHeading id="r-reads" title={{ zh: '推荐阅读', en: 'Recommended reads' }} />
      <Cards items={READS} />

      <SubHeading id="r-community" title={{ zh: '社区', en: 'Community' }} />
      <Cards items={COMMUNITY} />

      <div className="ascii-divider text-xs mt-10">
        {'═'.repeat(120)}
      </div>
      <p className="text-center text-fg-dim text-[12px] mt-2">
        <span className="text-amber">$</span> echo "happy vibing" &amp;&amp; exit 0
      </p>
    </Section>
  )
}
