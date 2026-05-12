import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import BiP from '@/components/BiP'
import Callout from '@/components/Callout'
import ConceptCard from '@/components/ConceptCard'
import CardGrid from '@/components/CardGrid'
import CodeBlock from '@/components/CodeBlock'
import AsciiDivider from '@/components/AsciiDivider'
import { useI18n } from '@/hooks/useI18n'

export default function Tips() {
  const { pick } = useI18n()
  return (
    <Section
      id="tips"
      num="5"
      title={{ zh: '进阶技巧', en: 'Tips & Tricks' }}
      subtitle={{ zh: '把熟练度从 30 分推到 80 分的实战手感', en: 'The moves that take you from 30/100 to 80/100' }}
    >
      {/* 5.1 Context optimization */}
      <SubHeading id="ctx-optim" num="5.1" title={{ zh: '上下文优化', en: 'Context optimization' }} />
      <CardGrid min={300}>
        <ConceptCard accent="cyan" title="@file 引用" tag={pick({ zh: '精准上下文', en: 'Precise ctx' })}>
          {pick({
            zh: '在提示词里写 @path/to/file 直接把文件塞进上下文。比贴整段代码干净，AI 也知道路径。',
            en: 'Write @path/to/file in the prompt to inject the file. Cleaner than pasting code; AI also learns the path.',
          })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '子智能体 (subagent)', en: 'Subagents' })} tag={pick({ zh: '并行/隔离', en: 'Parallel/isolated' })}>
          {pick({
            zh: '把搜索/读文件等重活外包给一个独立上下文的小工，主对话不被淹没。Claude Code: Explore / general-purpose.',
            en: 'Outsource heavy search / file reads to a worker with its own context — main chat stays clean. In Claude Code: Explore / general-purpose.',
          })}
        </ConceptCard>
        <ConceptCard accent="amber" title="MCP" tag={pick({ zh: 'AI 的"USB 口"', en: "AI's USB port" })}>
          {pick({
            zh: '让 AI 安全统一地连数据库、Jira、Slack、Notion 等外部系统。一次接入，多 Agent 通用。',
            en: 'Lets AI safely plug into DBs, Jira, Slack, Notion, etc. Connect once, all agents share.',
          })}
        </ConceptCard>
      </CardGrid>

      <CodeBlock filename="mcp-hello.md" lang="md">{`# 一个 MCP 「Hello World」

# 1. 装一个官方 MCP server（以 filesystem 为例）
npm i -g @modelcontextprotocol/server-filesystem

# 2. 在 Claude Code 的 settings.json 里注册
{
  "mcp": {
    "servers": {
      "fs": {
        "command": "mcp-server-filesystem",
        "args": ["/path/to/your/workspace"]
      }
    }
  }
}

# 3. 在对话里就能直接调用：
"用 fs 工具读取 README.md 然后给我总结"`}</CodeBlock>

      {/* 5.2 Debug */}
      <SubHeading id="debug" num="5.2" title={{ zh: '调试技巧', en: 'Debugging tricks' }} />
      <CardGrid min={280}>
        <ConceptCard accent="cyan" title={pick({ zh: '让它解释自己写的代码', en: 'Make it explain its own code' })}>
          {pick({
            zh: '"逐行解释你刚写的 foo 函数，并标出最可能出 bug 的地方"。常常它自己就会发现问题。',
            en: '"Explain foo line-by-line, marking the most bug-prone spots." Often it self-discovers issues.',
          })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '缩小复现范围', en: 'Minimize the repro' })}>
          {pick({
            zh: '让 AI 帮你做 minimal repro：去掉无关代码，留最小的还能复现的版本。',
            en: 'Have AI build a minimal repro — strip everything not needed to reproduce.',
          })}
        </ConceptCard>
        <ConceptCard accent="amber" title={pick({ zh: '"小黄鸭"对话', en: 'Rubber-duck w/ AI' })}>
          {pick({
            zh: '把你的思考过程讲给它听。它会问澄清问题，逼你把模糊的地方说清。',
            en: 'Talk through your thinking. It will ask clarifying questions that force you to articulate fuzziness.',
          })}
        </ConceptCard>
        <ConceptCard accent="green" title={pick({ zh: '别让它在错的方向上修', en: "Don't let it 'fix' the wrong thing" })}>
          {pick({
            zh: '如果它连改 3 次都不对，stop。换个角度：先让它定位，不要让它修。',
            en: 'If 3 fix attempts all miss, stop. Switch tack: ask it to locate, not to fix.',
          })}
        </ConceptCard>
      </CardGrid>

      {/* 5.3 Review */}
      <SubHeading id="review" num="5.3" title={{ zh: '代码审查', en: 'Code review' }} />
      <BiP
        text={{
          zh: '让另一个 Agent（或同一个 Agent 但换 hat）来评审刚写的代码。便宜、快、覆盖维度多。安全敏感场景一定要做。',
          en: 'Have a second agent (or the same one wearing a reviewer hat) review fresh code. Cheap, fast, multi-angle. Mandatory for security-sensitive code.',
        }}
      />
      <CodeBlock filename="review-prompt.md" lang="md">{`你是一位严苛的 senior reviewer。审下面的 diff：

\`\`\`diff
[diff]
\`\`\`

按维度列出问题（每行 ≤ 一句）：
- Correctness（边界/异常/错误处理）
- Security（注入/泄漏/越权）
- Performance（复杂度/N+1/内存）
- Readability（命名/可读性）
- Test coverage

只写问题，没问题写 OK。最后用一句话给一个 PASS / NEEDS CHANGES。`}</CodeBlock>

      <AsciiDivider label="tdd" />

      {/* 5.4 TDD */}
      <SubHeading id="tdd" num="5.4" title={{ zh: '测试驱动 Vibe-coding (TDD)', en: 'Test-Driven Vibe-coding' }} />
      <BiP
        text={{
          zh: '先让 AI 写一组「可执行的验收标准」（测试），通过即算完工。AI 跑测试自我纠错，比你来回 review 高效得多。',
          en: 'Have AI write executable acceptance criteria (tests) first; passing = done. Letting AI iterate on tests beats round-tripping reviews with you.',
        }}
      />
      <CodeBlock filename="tdd-flow.txt">{`流程：

  1. 你描述需求 + 验收标准
  2. AI 先写测试（不写实现）—— 你 review 测试
  3. AI 跑测试 → 全红（应该的，还没实现）
  4. AI 写最小实现让测试变绿
  5. AI 跑测试 → 绿 ✓
  6. AI 优化重构 → 测试依旧绿
  7. 你 review 整体 diff

为什么有效：
  - 测试可读 → 比读实现更容易确认意图正确
  - 测试可跑 → AI 自己就能验收
  - 测试留下 → 以后改代码也有保护伞`}</CodeBlock>

      {/* 5.5 Large codebases */}
      <SubHeading id="big-codebase" num="5.5" title={{ zh: '大型代码库', en: 'Large codebases' }} />
      <CodeBlock filename="big-repo-strategy.txt">{`三段式：

  ① 探索 (Explore)
     "先在不修改任何文件的前提下，告诉我:
      - 用户登录的逻辑分布在哪些文件？
      - 它的关键入口和数据流是什么？
      - 有没有相关的测试？"

  ② 定位 (Locate)
     "现在我想加一个'手机号登录'。
      请指出: 应该改哪几个文件？为什么是这些？
      有没有现成的辅助函数可以复用？"

  ③ 修改 (Modify)
     "按照刚才的方案，先改 file A，跑测试，
      再改 file B，再跑测试。"

关键：不要一开始就说"加个手机号登录"。
       那样 AI 会瞎猜文件、瞎造函数。`}</CodeBlock>

      {/* 5.6 Don't lose control */}
      <SubHeading id="control" num="5.6" title={{ zh: '控制 AI 失控', en: 'Keep AI from running wild' }} />
      <CardGrid min={260}>
        <ConceptCard accent="cyan" title="Plan Mode">
          {pick({
            zh: '只读规划模式：先出方案再动手。Claude Code 按 Shift+Tab 切。',
            en: 'Read-only planning mode: plan before edit. In Claude Code, Shift+Tab toggles it.',
          })}
        </ConceptCard>
        <ConceptCard accent="magenta" title={pick({ zh: '增量改动', en: 'Incremental edits' })}>
          {pick({
            zh: '一次一个文件 / 一个函数。不要一句话"重构整个项目"。',
            en: 'One file / one function per round. Never "refactor the whole repo" in a single shot.',
          })}
        </ConceptCard>
        <ConceptCard accent="amber" title={pick({ zh: '永远 commit', en: 'Always commit' })}>
          {pick({
            zh: '让 AI 干活前 commit；干完一个里程碑也 commit。出问题就 revert。',
            en: 'Commit before AI starts, commit on each milestone. If it breaks, revert.',
          })}
        </ConceptCard>
        <ConceptCard accent="green" title={pick({ zh: '限速', en: 'Throttle' })}>
          {pick({
            zh: '关掉 auto-approve。让它每次危险操作（删文件 / push / 调外部 API）都问你一下。',
            en: 'Disable auto-approve. Make it confirm risky ops (delete files / push / external API calls).',
          })}
        </ConceptCard>
      </CardGrid>

      <Callout variant="warning" title={pick({ zh: '黄金法则', en: 'Golden rule' })}>
        {pick({
          zh: '永远，永远，永远不要让 AI 在一个有未提交改动的仓库里"放飞自我"。本地脏，先 commit / stash 再说。',
          en: "Never, ever let AI go wild in a repo with uncommitted changes. If dirty: commit or stash first.",
        })}
      </Callout>
    </Section>
  )
}
