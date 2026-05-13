import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import BiP from '@/components/BiP'
import Callout from '@/components/Callout'
import ConceptCard from '@/components/ConceptCard'
import CardGrid from '@/components/CardGrid'
import ComparisonTable from '@/components/ComparisonTable'
import CodeBlock from '@/components/CodeBlock'
import BiImage from '@/components/BiImage'
import VendorLogo from '@/components/VendorLogo'
import { useI18n } from '@/hooks/useI18n'
import { MODELS } from '@/data/models'

export default function AIFundamentals() {
  const { pick } = useI18n()
  return (
    <Section
      id="ai-fundamentals"
      num="1"
      title={{ zh: 'AI 基础知识', en: 'AI Fundamentals' }}
      subtitle={{
        zh: '看懂这些，你跟 AI 说话就有底气了',
        en: 'Understand these and you can talk to AI with confidence',
      }}
    >
      {/* 1.1 What is LLM */}
      <SubHeading id="what-is-llm" num="1.1" title={{ zh: '什么是 LLM', en: 'What is an LLM' }} />
      <BiImage
        name="About-LLM"
        alt={{ zh: '什么是 LLM 示意图', en: 'What is an LLM — illustration' }}
      />
      <BiP
        text={{
          zh: 'LLM = Large Language Model（大语言模型）。它是一个用海量文本训练出来的神经网络，本质是「预测下一个词」——你给它一段话，它根据训练时见过的模式接下去。会编程，是因为代码也是文本；会思考，是因为它看过太多人类的思考过程。',
          en: 'LLM = Large Language Model. A neural network trained on huge piles of text. At its core it just "predicts the next word" — give it a prefix, it continues based on patterns it saw in training. It codes because code is text; it "reasons" because it has seen lots of human reasoning.',
        }}
      />
      <Callout variant="note" title={pick({ zh: '类比', en: 'Analogy' })}>
        {pick({
          zh: '把它想象成一个读过半个互联网的超级实习生：知识广博、表达流畅，但偶尔会胡说，需要你 review。',
          en: 'Think of it as a super-intern who has read half the internet: broad knowledge, fluent, but occasionally makes things up — you need to review.',
        })}
      </Callout>

      {/* 1.2 Models lineup */}
      <SubHeading id="models-lineup" num="1.2" title={{ zh: '主流模型一览', en: 'Models lineup' }} />
      <BiP
        text={{
          zh: '不同模型各有特点。日常 vibe-coding 的"主力选 1 个，备用选 1 个"就够。',
          en: 'Different models have different strengths. For daily vibe-coding, pick one main model and one backup — that\'s enough.',
        }}
      />
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
            key: 'tags',
            header: 'Tags',
            render: (m: any) => (
              <div className="flex flex-wrap gap-1">
                {m.tags.map((t: string) => (
                  <span key={t} className="text-[10px] px-1.5 py-0.5 border border-line rounded text-fg-dim">
                    {t}
                  </span>
                ))}
              </div>
            ),
          },
        ]}
        rows={MODELS}
      />

      {/* 1.3 Key concepts */}
      <SubHeading id="key-concepts" num="1.3" title={{ zh: '关键概念', en: 'Key concepts' }} />
      <CardGrid min={260}>
        <ConceptCard accent="cyan" title="Token" subtitle={pick({ zh: 'AI 眼中的"字"', en: "AI's notion of a 'word'" })}>
          {pick({
            zh: 'AI 不按字读，按 token 读。1 英文单词 ≈ 1 token；1 汉字 ≈ 1-2 token。提示词太长会被截断。',
            en: 'AI reads tokens, not letters. 1 EN word ≈ 1 token; 1 CN char ≈ 1-2 tokens. Long prompts get truncated.',
          })}
          <BiImage
            name="concepts-token"
            alt={{ zh: 'Token 切分示例', en: 'Token segmentation example' }}
            maxWidth="100%"
          />
        </ConceptCard>
        <ConceptCard accent="magenta" title="Context Window" subtitle={pick({ zh: '工作记忆容量', en: 'Working-memory size' })}>
          {pick({
            zh: '一次对话能装下的最大 token 数。Claude 4 是 200K（≈ 一本中篇小说）。超过会忘最早的内容。',
            en: 'Max tokens it can hold in one conversation. Claude 4 = 200K (≈ a novella). Beyond that, earliest content drops.',
          })}
        </ConceptCard>
        <ConceptCard accent="amber" title="Temperature" subtitle={pick({ zh: '稳定 vs 创造', en: 'Stable vs creative' })}>
          {pick({
            zh: '0 = 同样输入永远同样输出；越高输出越发散。写代码用 0~0.3，写文案用 0.7~1。',
            en: '0 = same input → same output. Higher = more variety. Use 0~0.3 for code, 0.7~1 for creative writing.',
          })}
        </ConceptCard>
        <ConceptCard accent="green" title="Knowledge Cutoff" subtitle={pick({ zh: '它的"今天"是什么时候', en: "What's 'today' for it" })}>
          {pick({
            zh: '训练数据的截止日期。问它"最新"东西前先确认它的 cutoff，不然就是在问它幻觉。',
            en: 'Training data cutoff. Before asking about anything "latest", check the cutoff — otherwise you\'re asking for hallucinations.',
          })}
        </ConceptCard>
      </CardGrid>

      <Callout variant="tip" title={pick({ zh: '估 token 数', en: 'Estimating tokens' })}>
        {pick({
          zh: '快速估算：英文文本 ÷ 4 ≈ token 数；中文文本 × 1.5 ≈ token 数。',
          en: 'Quick estimate: EN chars ÷ 4 ≈ tokens; CN chars × 1.5 ≈ tokens.',
        })}
      </Callout>

      {/* 1.4 Boundaries */}
      <SubHeading id="boundaries" num="1.4" title={{ zh: '能力边界', en: 'Capability boundaries' }} />
      <CardGrid min={280}>
        <ConceptCard accent="green" title={pick({ zh: '✓ 擅长', en: '✓ Good at' })}>
          <ul className="m-0 pl-4 list-none space-y-1 text-[13px]">
            <li>▸ {pick({ zh: '理解模糊需求并细化', en: 'Refining vague requirements' })}</li>
            <li>▸ {pick({ zh: '生成、解释、翻译代码', en: 'Generating / explaining / translating code' })}</li>
            <li>▸ {pick({ zh: '总结长文档、做对比', en: 'Summarizing long docs, doing comparisons' })}</li>
            <li>▸ {pick({ zh: '按已知模式生成新内容', en: 'Producing new content in known patterns' })}</li>
          </ul>
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '✘ 不擅长', en: '✘ Bad at' })}>
          <ul className="m-0 pl-4 list-none space-y-1 text-[13px]">
            <li>▸ {pick({ zh: '精确数学计算（要它调计算器）', en: 'Precise math (let it call a calculator)' })}</li>
            <li>▸ {pick({ zh: '最新事件（cutoff 之后的）', en: 'Recent events (after cutoff)' })}</li>
            <li>▸ {pick({ zh: '记住跨会话的事（用 CLAUDE.md）', en: 'Remembering across sessions (use CLAUDE.md)' })}</li>
            <li>▸ {pick({ zh: '自己验证自己的输出', en: 'Self-verifying its own outputs' })}</li>
          </ul>
        </ConceptCard>
      </CardGrid>

      <SubHeading id="hallucination" num="1.4.1" title={{ zh: '幻觉是什么', en: 'What is hallucination' }} />
      <BiP
        text={{
          zh: 'LLM 会一本正经地编造不存在的函数、API、库版本和论文引用。它不是"骗"你，它就是预测下一个最可能的词——预测错就成了幻觉。',
          en: "LLMs confidently fabricate non-existent functions, APIs, library versions, and citations. It's not lying — it's predicting the next plausible word. When the prediction is wrong, that's hallucination.",
        }}
      />
      <Callout variant="warning" title={pick({ zh: '5 个缓解策略', en: '5 mitigations' })}>
        <ol className="m-0 pl-4 space-y-1">
          <li>{pick({ zh: '提供权威上下文（贴文档、贴代码）', en: 'Provide authoritative context (paste docs, paste code)' })}</li>
          <li>{pick({ zh: '让它先列依据再下结论', en: 'Make it cite reasons before concluding' })}</li>
          <li>{pick({ zh: '执行代码而非只看代码', en: 'Run the code, don\'t just read it' })}</li>
          <li>{pick({ zh: '关键事实用搜索 / RAG 校验', en: 'Verify key facts via search / RAG' })}</li>
          <li>{pick({ zh: '永远不要相信它说"这个库有 xxx 方法"', en: "Never trust 'this library has xxx method' on faith" })}</li>
        </ol>
      </Callout>

      {/* 1.5 Chat vs Copilot vs Agent */}
      <SubHeading id="chat-vs-agent" num="1.5" title={{ zh: 'Chat / Copilot / Agent 区别', en: 'Chat vs Copilot vs Agent' }} />
      <CodeBlock filename="comparison.txt">{`Chat       ─→ 你问一句，它答一句。不动你的文件。
Copilot    ─→ 在 IDE 里给你补全代码。你按 Tab。
Agent      ─→ 给它一个目标，它自己规划、改文件、跑命令、看结果、再迭代。

类比：
  Chat    = 顾问                — 你做事，他给建议
  Copilot = 副驾驶              — 你开车，他帮看路
  Agent   = 实习生 / 助理工程师  — 你布置任务，他独立执行`}</CodeBlock>

      <CardGrid min={280}>
        <ConceptCard accent="cyan" title="Chat" subtitle="ChatGPT, Claude.ai">
          {pick({ zh: '问答式，最简单。适合查、问、聊。', en: 'Q&A style, simplest. Good for asking, learning, brainstorming.' })}
        </ConceptCard>
        <ConceptCard accent="magenta" title="Copilot" subtitle="GitHub Copilot">
          {pick({
            zh: '内联补全。你打字它接龙，按 Tab 接受。改动是你主导的。',
            en: 'Inline completion. It suggests, you press Tab. You stay in control.',
          })}
        </ConceptCard>
        <ConceptCard accent="amber" title="Agent" subtitle="Claude Code, Cursor Agent">
          {pick({
            zh: '能自己看代码、改文件、跑测试、再 debug。你给目标，它给结果。',
            en: 'Reads code, edits files, runs tests, debugs — autonomously. You give the goal, it delivers the result.',
          })}
        </ConceptCard>
      </CardGrid>

      <Callout variant="anti" title={pick({ zh: '新手常犯', en: 'Common newbie mistake' })}>
        {pick({
          zh: '把 Agent 当 Chat 用：每次只问一个孤立问题，不给上下文，不让它接触代码。Agent 的能力是「自己探索 + 反复执行」，不让它执行就只剩个普通聊天机器人。',
          en: "Treating Agent like Chat: asking isolated questions, no context, no file access. An Agent's power is 'explore + execute repeatedly' — strip that away and it's just a chatbot.",
        })}
      </Callout>
    </Section>
  )
}
