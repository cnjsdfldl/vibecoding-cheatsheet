import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import BiP from '@/components/BiP'
import Callout from '@/components/Callout'
import ConceptCard from '@/components/ConceptCard'
import CardGrid from '@/components/CardGrid'
import CodeBlock from '@/components/CodeBlock'
import PromptTemplate from '@/components/PromptTemplate'
import AsciiDivider from '@/components/AsciiDivider'
import { useI18n } from '@/hooks/useI18n'
import { PROMPT_TEMPLATES } from '@/data/prompt-templates'

export default function PromptEngineering() {
  const { pick } = useI18n()
  return (
    <Section
      id="prompt-engineering"
      num="2"
      title={{ zh: '提示词工程', en: 'Prompt Engineering' }}
      subtitle={{ zh: '会写提示词的人，能从同一个模型挖出 3-10 倍价值', en: 'Good prompting unlocks 3-10× more value from the same model' }}
    >
      {/* 2.1 Golden structure */}
      <SubHeading id="golden-structure" num="2.1" title={{ zh: '黄金结构', en: 'The golden structure' }} />
      <BiP
        text={{
          zh: '一条严肃的提示词，最好包含五要素。哪怕只用一两条，也比一句话"帮我写个 xxx"靠谱十倍。',
          en: 'A serious prompt should cover five elements. Even using two of them is 10× better than "help me write xxx".',
        }}
      />
      <CodeBlock filename="prompt.md" lang="md">{`# Role        ── 你是什么角色（资深 React 工程师 / 文案专家）
# Task        ── 一句话目标
# Context     ── 背景、约束、相关文件
# Format      ── 期望的输出形式（代码 / 表格 / Markdown）
# Constraints ── 不要做什么、必须做什么`}</CodeBlock>

      {/* 2.2 Five principles */}
      <SubHeading id="five-principles" num="2.2" title={{ zh: '五大黄金原则', en: 'Five golden principles' }} />
      <CardGrid min={260}>
        <ConceptCard accent="cyan" title={pick({ zh: '① 清晰具体', en: '① Be specific' })}>
          {pick({
            zh: '"帮我改一下" → "把 fetchUser 改成异步，加重试 3 次、退避指数 2"。具体到能验收。',
            en: '"Help me fix it" → "Make fetchUser async, retry 3 times, exponential back-off ×2". Specific enough to verify.',
          })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '② 给示例', en: '② Show examples' })}>
          {pick({
            zh: '一个好示例胜过 100 字描述。给 2-3 组 input/output，AI 抓住风格的速度立刻 ↑↑↑。',
            en: 'One good example beats 100 words. Give 2-3 input/output pairs and AI grasps the style instantly.',
          })}
        </ConceptCard>
        <ConceptCard accent="amber" title={pick({ zh: '③ 分步思考', en: '③ Think step-by-step' })}>
          {pick({
            zh: '复杂任务加一句"先列计划再执行"或"先分析再写代码"，正确率显著上升。',
            en: 'For complex tasks, add "outline a plan first then execute" or "analyze before coding". Big accuracy boost.',
          })}
        </ConceptCard>
        <ConceptCard accent="green" title={pick({ zh: '④ 验收标准', en: '④ Acceptance criteria' })}>
          {pick({
            zh: '告诉它"什么算做完了"：跑通某个测试、输出包含某字段、不超过 50 行。',
            en: 'Tell it what "done" means: passes a specific test, contains certain fields, under 50 lines.',
          })}
        </ConceptCard>
        <ConceptCard accent="cyan" title={pick({ zh: '⑤ 迭代优化', en: '⑤ Iterate' })}>
          {pick({
            zh: '第一版很少完美。基于结果改提示词，2-3 轮往往就够。别想一次写到天衣无缝。',
            en: "First draft rarely lands. Iterate the prompt 2-3 times based on output. Don't aim for the perfect one-shot.",
          })}
        </ConceptCard>
      </CardGrid>

      {/* 2.3 Techniques */}
      <SubHeading id="techniques" num="2.3" title={{ zh: '核心技巧', en: 'Core techniques' }} />

      <CardGrid min={300}>
        <ConceptCard accent="cyan" title="Few-shot" tag={pick({ zh: '示例提示', en: 'Examples' })}>
          {pick({
            zh: '直接在 prompt 里给几个 (输入, 输出) 示例。让 AI 模仿你的风格。',
            en: 'Drop a few (input, output) pairs in the prompt. AI mimics your style.',
          })}
        </ConceptCard>
        <ConceptCard accent="magenta" title="Chain-of-Thought" tag={pick({ zh: '思维链', en: 'CoT' })}>
          {pick({
            zh: '加一句"让我们一步一步想"。或者要求它"先列出推理过程再给答案"。',
            en: 'Add "let\'s think step by step". Or ask it to "list reasoning first, then answer".',
          })}
        </ConceptCard>
        <ConceptCard accent="amber" title="Role Prompting" tag={pick({ zh: '角色扮演', en: 'Persona' })}>
          {pick({
            zh: '"你是一位严苛的 senior reviewer"。设定角色会调用对应的语言风格和判断标准。',
            en: '"You are a strict senior reviewer". A role triggers the matching style and judgment.',
          })}
        </ConceptCard>
        <ConceptCard accent="green" title={pick({ zh: '任务拆解', en: 'Decomposition' })} tag={pick({ zh: '化整为零', en: 'Divide & conquer' })}>
          {pick({
            zh: '一次只让它做一件可验证的小事。复杂任务先让它输出计划，确认后再执行。',
            en: 'Ask for one verifiable thing at a time. For big tasks, get a plan first, approve, then execute.',
          })}
        </ConceptCard>
        <ConceptCard accent="cyan" title="Meta-prompting" tag={pick({ zh: '让 AI 写 prompt', en: 'AI writes prompts' })}>
          {pick({
            zh: '让 AI 反问你 5 个关键问题，再根据你的回答生成最终提示词。适合"不知道怎么开口"。',
            en: 'Ask the AI to interview you with 5 key questions, then produce the final prompt from your answers. Great when you don\'t know where to start.',
          })}
        </ConceptCard>
      </CardGrid>

      <AsciiDivider label="before / after" />

      <BiP
        text={{
          zh: '直观感受一下 "清晰具体" 的威力：',
          en: 'See "be specific" in action:',
        }}
      />
      <div className="grid md:grid-cols-2 gap-3">
        <CodeBlock filename="bad-prompt.md" lang="md">{`帮我写个登录功能`}</CodeBlock>
        <CodeBlock filename="good-prompt.md" lang="md">{`角色：你是资深 React 工程师。

任务：用 React + TypeScript 写一个邮箱密码登录组件。

约束：
- 表单库用 react-hook-form
- 密码至少 8 位，含字母和数字
- 失败显示具体错误（邮箱格式 / 密码弱 / 网络失败）
- 提交时按钮 disabled 并显示 spinner
- 不要引入额外依赖

输出：
- 完整 LoginForm.tsx
- 配套 schema 文件
- 一句话使用说明`}</CodeBlock>
      </div>

      {/* 2.4 Anti-patterns */}
      <SubHeading id="prompt-antipatterns" num="2.4" title={{ zh: '常见反模式', en: 'Common anti-patterns' }} />
      <CardGrid min={300}>
        <ConceptCard accent="magenta" title={pick({ zh: '✘ 含糊指令', en: '✘ Vague instructions' })}>
          {pick({ zh: '"写得好点儿" — AI 不知道你的"好"是什么。', en: '"Make it better" — AI doesn\'t know your "better".' })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '✘ 一次塞 10 件事', en: '✘ 10 tasks in one prompt' })}>
          {pick({ zh: '"顺便也改一下…" 会让它每件都做半成品。', en: '"Also fix..." makes everything half-done.' })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '✘ 过度限制', en: '✘ Over-constraining' })}>
          {pick({ zh: '约束多到互相矛盾，AI 只能放弃某一条。', en: 'So many constraints they conflict — AI has to drop one.' })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '✘ 把 AI 当搜索引擎', en: '✘ Using AI as Google' })}>
          {pick({ zh: '"最新的 React 版本是？" — 用它的 cutoff 之外的事实查询是在求幻觉。', en: '"What\'s the latest React version?" — asking past-cutoff facts is begging for hallucination.' })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '✘ 不给上下文', en: '✘ No context' })}>
          {pick({ zh: '"改一下这个 bug" 但没贴代码、没贴报错。', en: '"Fix this bug" — without code, without the error.' })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '✘ 不验收就放走', en: '✘ Shipping without verifying' })}>
          {pick({ zh: '"看起来对了就 commit"。看起来对 ≠ 跑得通。', en: '"Looks right, commit it". Looks-right ≠ works.' })}
        </ConceptCard>
      </CardGrid>

      {/* 2.5 Templates */}
      <SubHeading id="prompt-templates" num="2.5" title={{ zh: '提示词模板库', en: 'Prompt template library' }} />
      <BiP
        text={{
          zh: '下面 10 个模板覆盖最常见的 vibe-coding 场景。直接复制、替换方括号里的内容即可。',
          en: 'The 10 templates below cover the most common vibe-coding scenarios. Copy, fill in the brackets, go.',
        }}
      />

      {PROMPT_TEMPLATES.map((p) => (
        <PromptTemplate
          key={p.id}
          title={pick(p.title)}
          scenario={pick(p.scenario)}
          template={p.template}
          notes={p.notes ? pick(p.notes) : undefined}
        />
      ))}

      <Callout variant="tip" title={pick({ zh: '保存自己的模板', en: 'Build your own library' })}>
        {pick({
          zh: '把你试过有效的提示词存进一个个人 .md 文件。用得越多越值钱。',
          en: 'Save prompts that worked into a personal .md file. The library compounds.',
        })}
      </Callout>
    </Section>
  )
}
