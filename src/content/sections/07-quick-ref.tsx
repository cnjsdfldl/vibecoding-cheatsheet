import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import ComparisonTable from '@/components/ComparisonTable'
import CardGrid from '@/components/CardGrid'
import ConceptCard from '@/components/ConceptCard'
import CodeBlock from '@/components/CodeBlock'
import Kbd from '@/components/Kbd'
import VendorLogo from '@/components/VendorLogo'
import { useI18n } from '@/hooks/useI18n'
import { MODELS } from '@/data/models'

const SLASH_CMDS: { cmd: string; desc: { zh: string; en: string } }[] = [
  { cmd: '/help', desc: { zh: '帮助', en: 'Help' } },
  { cmd: '/clear', desc: { zh: '清空当前对话上下文', en: 'Clear current conversation context' } },
  { cmd: '/compact', desc: { zh: '压缩对话（保留关键信息）', en: 'Compress conversation (keep key info)' } },
  { cmd: '/init', desc: { zh: '为项目生成 CLAUDE.md', en: 'Generate CLAUDE.md for the project' } },
  { cmd: '/model', desc: { zh: '切换当前模型', en: 'Switch current model' } },
  { cmd: '/review', desc: { zh: '让 AI review 当前改动 / PR', en: 'AI reviews current diff / PR' } },
  { cmd: '/agents', desc: { zh: '管理子智能体配置', en: 'Manage subagent configs' } },
  { cmd: '/mcp', desc: { zh: '查看/管理 MCP 服务', en: 'View / manage MCP servers' } },
  { cmd: '/cost', desc: { zh: '查看本次会话花费', en: 'Show current session cost' } },
  { cmd: '/config', desc: { zh: '修改全局配置', en: 'Edit global config' } },
]

export default function QuickRef() {
  const { pick } = useI18n()
  return (
    <Section
      id="quick-ref"
      num="7"
      title={{ zh: '速查表', en: 'Quick Reference' }}
      subtitle={{ zh: '需要查的时候，从这里开始', en: 'When you need to look something up, start here' }}
    >
      {/* Models */}
      <SubHeading id="models-table" title={{ zh: '模型对比', en: 'Models comparison' }} />
      <ComparisonTable
        columns={[
          {
            key: 'name',
            header: 'Model',
            className: 'text-cyan font-semibold',
            render: (m: any) => (
              <span className="inline-flex items-center gap-2">
                <VendorLogo vendor={m.vendor} />
                <span>{m.name}</span>
              </span>
            ),
          },
          { key: 'vendor', header: 'Vendor', className: 'text-fg-dim' },
          { key: 'context', header: 'Ctx', className: 'text-amber' },
          {
            key: 'strengths',
            header: pick({ zh: '强项', en: 'Strengths' }),
            render: (m: any) => pick(m.strengths),
          },
          {
            key: 'notes',
            header: pick({ zh: '说明', en: 'Notes' }),
            render: (m: any) => <span className="text-fg-dim">{pick(m.notes)}</span>,
          },
        ]}
        rows={MODELS}
      />

      {/* Claude Code slash commands */}
      <SubHeading id="slash-commands" title={{ zh: 'Claude Code 常用命令', en: 'Claude Code common commands' }} />
      <ComparisonTable
        columns={[
          { key: 'cmd', header: 'Command', className: 'text-amber font-mono' },
          { key: 'desc', header: pick({ zh: '作用', en: 'Description' }), render: (r: any) => pick(r.desc) },
        ]}
        rows={SLASH_CMDS}
      />

      {/* Keyboard */}
      <SubHeading id="kbd" title={{ zh: '键盘快捷键', en: 'Keyboard shortcuts' }} />
      <CardGrid min={240}>
        <ConceptCard accent="cyan" title={pick({ zh: '本页面 (Cheatsheet)', en: 'This page' })}>
          <ul className="m-0 pl-3 list-none space-y-1.5 text-[13px]">
            <li>
              <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> — {pick({ zh: '全局搜索', en: 'Global search' })}
            </li>
            <li>
              <Kbd>/</Kbd> — {pick({ zh: '同上（焦点不在输入框时）', en: 'Same (when not in input)' })}
            </li>
            <li>
              <Kbd>↑</Kbd> <Kbd>↓</Kbd> — {pick({ zh: '搜索结果导航', en: 'Navigate results' })}
            </li>
            <li>
              <Kbd>Esc</Kbd> — {pick({ zh: '关闭弹层', en: 'Close overlay' })}
            </li>
          </ul>
        </ConceptCard>
        <ConceptCard accent="magenta" title="Claude Code">
          <ul className="m-0 pl-3 list-none space-y-1.5 text-[13px]">
            <li>
              <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd> — {pick({ zh: '切换 Plan / 执行模式', en: 'Toggle Plan / execute mode' })}
            </li>
            <li>
              <Kbd>Esc</Kbd> — {pick({ zh: '中断当前响应', en: 'Interrupt current response' })}
            </li>
            <li>
              <Kbd>Esc</Kbd> <Kbd>Esc</Kbd> — {pick({ zh: '回到上一条消息', en: 'Back to previous message' })}
            </li>
            <li>
              <Kbd>Ctrl</Kbd> + <Kbd>R</Kbd> — {pick({ zh: '展开/收起详细输出', en: 'Toggle verbose output' })}
            </li>
          </ul>
        </ConceptCard>
        <ConceptCard accent="amber" title={pick({ zh: '通用 IDE', en: 'General IDE' })}>
          <ul className="m-0 pl-3 list-none space-y-1.5 text-[13px]">
            <li>
              <Kbd>Cmd</Kbd> / <Kbd>Ctrl</Kbd> + <Kbd>I</Kbd> — {pick({ zh: 'AI 内联编辑', en: 'AI inline edit' })}
            </li>
            <li>
              <Kbd>Cmd</Kbd> / <Kbd>Ctrl</Kbd> + <Kbd>L</Kbd> — {pick({ zh: '在 chat 中提问', en: 'Ask in chat' })}
            </li>
            <li>
              <Kbd>Tab</Kbd> — {pick({ zh: '接受补全', en: 'Accept completion' })}
            </li>
          </ul>
        </ConceptCard>
      </CardGrid>

      <SubHeading id="cheat-phrases" title={{ zh: '万能口令', en: 'Magic phrases' }} />
      <CodeBlock filename="phrases.md" lang="md">
        {pick({
          zh: `# 让它先想再做
"先列出你的计划，等我确认再开始改文件"

# 让它读代码再说话
"在不修改任何东西的前提下，先读 @src/auth/ 然后总结现状"

# 让它说"我不知道"
"如果你不确定，请说 'unknown' 而不是猜测"

# 让它给替代方案
"给我 3 种方案，标注优缺点，最后推荐一个并解释为什么"

# 让它做 review
"换一顶 reviewer 帽子，找出刚才这段代码的问题"

# 让它简化输出
"用最简单的话讲。假设我是个聪明的新手，不要堆术语"

# 让它停止过度道歉
"不要说'我理解了''你说得对'之类的客套，直接进入正题"`,
          en: `# Make it think before doing
"Outline your plan first; don't edit any files until I confirm."

# Make it read the code first
"Without modifying anything, read @src/auth/ and summarize the current state."

# Make it admit uncertainty
"If you're not sure, say 'unknown' instead of guessing."

# Make it offer alternatives
"Give me 3 options with pros/cons, then recommend one and explain why."

# Make it review
"Put on a reviewer hat and find problems in the code you just wrote."

# Make it simplify
"Explain in the simplest terms. Assume I'm a smart beginner — don't pile on jargon."

# Make it stop over-apologizing
"Skip pleasantries like 'I understand' / 'You're right' — just get to the point."`,
        })}
      </CodeBlock>
    </Section>
  )
}
