# Vibe-Coding CheatSheet —— 面向新手的系统性入门页面

> **Last Updated:** 2026-05-12

## Context（为什么做这件事）

仓库 `vibecoding-cheatsheet` 目前只有一个空的 README。目标是从零搭建一个**面向完全新手（含非程序员）**的系统性入门页面，让一个零基础的用户能在一处看完：AI 基础知识 → 提示词工程 → Vibe-coding 实战 → 工作流与技巧。

读者画像：会用电脑、对 AI 写代码感兴趣，但不一定有编程基础。所以页面要**讲透概念、给可复制模板、列出反面教材**，而不是堆术语。

技术与形式决策（已与用户对齐）：
- 形式：**React + Vite + TypeScript + Tailwind CSS** 单页应用
- 语言：**中英双语**（默认中文，顶部一键切换）
- 主要交互：**全局搜索（Ctrl+K）**、**代码/提示词一键复制**、**中英切换**
- 工具侧重：**Claude Code** 为主线，附 Open Code / OpenClaw / Hermes 等用户指定工具的对照说明（具体工具名在内容编写阶段需与用户最终确认拼写与定位）

---

## 一、内容结构（完整大纲）

整个页面分 3 大板块 11 章，覆盖"先理解 → 再使用 → 后查阅"的学习路径。

### 板块 A · 入门基础（Foundations）

#### 0. 写在前面 / Introduction
- 什么是 Vibe-coding？（引用 Karpathy 原始定义 + 一句话通俗版）
- 这份 CheatSheet 适合谁、不适合谁
- 三种阅读方式：① 顺序通读 ② 按需查阅 ③ 跟着「学习路径」打卡

#### 1. AI 基础知识 / AI Fundamentals
- 1.1 什么是 LLM —— 用「会读会写的超级实习生」类比讲清楚
- 1.2 主流模型一览（卡片对比）：Claude / GPT / Gemini / DeepSeek / Qwen
- 1.3 关键概念可视化
  - **Token**：模型如何「读」文字（带可视化分词示例）
  - **Context Window**：模型的"工作记忆"，为什么会"忘"
  - **Temperature**：稳定输出 vs 创造性输出
  - **Knowledge Cutoff**：模型知道的最后日期
- 1.4 模型能力的边界
  - ✅ 它擅长：理解意图、生成代码、解释、翻译、总结
  - ❌ 它不擅长：精确计算、最新信息、长时记忆、自我验证
  - **幻觉（Hallucination）**：为什么会出现 + 5 个缓解策略
- 1.5 Chat / Copilot / Agent 三者的区别（图示）

#### 2. 提示词工程 / Prompt Engineering
- 2.1 提示词的黄金结构：**角色 + 任务 + 上下文 + 输出格式 + 约束**（带模板）
- 2.2 五大黄金原则
  1. 清晰具体（用例子说明 vague vs specific）
  2. 提供示例（few-shot 是最快的"教 AI"方式）
  3. 分步思考（先想再做，避免马虎）
  4. 给出验收标准（什么算"做完了"）
  5. 迭代优化（一次写不出完美提示词）
- 2.3 核心技巧速查（每个一张卡片，含 Before/After 对比）
  - Few-shot Learning
  - Chain-of-Thought（思维链）
  - Role Prompting（角色扮演）
  - 任务拆解（Task Decomposition）
  - Meta-prompting（让 AI 帮你写提示词）
- 2.4 反模式（要避免的 7 种写法）
- 2.5 **提示词模板库**（10+ 复制即用模板，按场景分组：代码生成、Code Review、Debug、Refactor、文档、单测、产品需求转代码……）

---

### 板块 B · Vibe-coding 实战（Hands-on）

#### 3. Vibe-coding 入门 / Vibe-coding 101
- 3.1 什么是 Vibe-coding —— 深度版（Karpathy 定义 + 国内语境）
- 3.2 核心心态转变：**从"写代码"到"描述意图"**
- 3.3 工具生态一览
  - Claude Code（终端 Agent，主线）
  - Open Code / OpenClaw / Hermes（用户指定工具，对照说明）
  - 其他主流：Cursor / Windsurf / Aider / Cline
  - **选型决策树**（"我应该用哪个？"）
- 3.4 你的第一次 Vibe-coding（Step-by-step，5 分钟跑通）
  - 安装 → 项目初始化 → 第一句指令 → 看 AI 工作 → 验证 → 迭代

#### 4. 核心工作流 / Core Workflows
- 4.1 **黄金循环**：探索 → 计划 → 执行 → 验证（页面核心图示）
- 4.2 项目上下文管理：`CLAUDE.md` / `AGENTS.md` / `.cursorrules` 写法对比与模板
- 4.3 任务拆分原则：单一目标 / 可验证 / 可回滚
- 4.4 验证策略：自动化测试 / Lint / 人工 Review 各自适用场景
- 4.5 Git 配合 Vibe-coding：分支策略、commit 粒度、出问题怎么回滚
- 4.6 **"让 AI 做 vs 自己做"判断准则**（决策表）

#### 5. 进阶技巧 / Tips & Tricks
- 5.1 上下文优化
  - 文件引用 `@file` 的正确用法
  - 子智能体（subagent）/ 多 agent 协作
  - **MCP（Model Context Protocol）** 扫盲与一个 hello-world 示例
- 5.2 调试技巧
  - 让 AI 解释自己写的代码
  - 缩小复现范围
  - "Rubber Duck" with AI
- 5.3 代码审查：让另一个 agent 来 Review / 安全审查
- 5.4 **测试驱动 Vibe-coding（TDD with AI）**：先写测试再让 AI 实现
- 5.5 处理大型代码库：探索 → 定位 → 修改 三段式
- 5.6 控制 AI 失控：Plan Mode / 增量改动 / 强制版本控制

#### 6. 反模式手册 / Anti-Patterns（醒目卡片）
- 一次让 AI 做太多
- 不读 AI 生成的代码
- 忽略错误消息，让 AI 一遍遍重试
- 上下文塞满无关信息
- 不写测试
- 让 AI 反复改同一段代码（陷入循环）
- 复制网上提示词不看就用

---

### 板块 C · 参考与查询（Reference）

#### 7. 速查表 / Quick Reference
- 主流模型对比表（参数 / 价格 / 上下文长度 / 特点 / 推荐场景）
- Claude Code 常用 slash 命令
- 常用键盘快捷键
- 常用提示词关键短语

#### 8. 术语表 / Glossary
- LLM, Token, Context Window, Embedding, RAG, MCP, Agent, Tool Use, Subagent, Function Calling, Multi-modal, Fine-tuning, Temperature, Top-p, Prompt Injection ...
- 每个术语：一句话定义 + 类比 + 链接到本页深入说明

#### 9. 学习路径 / Learning Path（4 周打卡）
- 第 1 周：选一个工具，跑通 3 个小任务
- 第 2 周：写好你的 `CLAUDE.md`，掌握黄金循环
- 第 3 周：用 TDD 完成一个完整功能
- 第 4 周：尝试多 agent 协作 / MCP 接入

#### 10. 资源链接 / Resources
- 官方文档（Anthropic、各工具官方）
- 推荐博客 / 视频 / 论文
- 中文社区与 English communities

---

## 二、页面与组件设计

### 视觉风格（Cyberpunk × Terminal × Pocket Dictionary）

整体定调一句话：**"赛博朋克霓虹 + Geek 终端命令行 + 字典/小抄式紧凑信息密度"**。参考站：[openclawcheatsheet.com](https://openclawcheatsheet.com/)（高密度、终端审美、Copy 按钮、`---` 分隔）。

**1. 配色（深色优先，禁用纯黑/纯白）**

| 角色 | 色值 | 用途 |
|------|------|------|
| `--bg` | `#0B0F14` | 深空背景（接近黑但带蓝调） |
| `--bg-elev` | `#11161D` | 卡片/代码块底色 |
| `--fg` | `#D7E0EA` | 正文主色（柔和白，不刺眼） |
| `--fg-dim` | `#7C8896` | 次要文字、行号、注释 |
| `--neon-cyan` | `#00F0FF` | 主强调色：链接、当前激活、终端光标 |
| `--neon-magenta` | `#FF2E97` | 副强调色：标签、Hot key、关键术语 |
| `--neon-amber` | `#FFB454` | 警示/AntiPattern、命令提示符 `$` |
| `--neon-green` | `#39FF7F` | Tip / 成功 / "运行成功"反馈 |
| `--grid-line` | `rgba(0,240,255,0.08)` | 网格背景线、分隔线 |

**默认深色，不做亮色主题**，符合 Geek 审美也减少维护成本。

**2. 字体**

- 全局正文：`"JetBrains Mono"` 或 `"IBM Plex Mono"`（等宽，强化"打开 man page"的感觉）作为主字体
- 中文：`"Sarasa Mono SC"`（更纱黑体 等宽中文）/ 兜底 `"霞鹜文楷等宽"`
- 装饰大标题：`"Major Mono Display"` 或 `"Orbitron"`（赛博朋克气质）
- 正文字号 14px / 行高 1.55，**比常规文档密一档**，强化"字典"质感

**3. 布局密度（小抄式）**

- 三栏：左 TOC（折叠树）/ 中主内容（多列瀑布）/ 右"On this page"目录
- 主内容区在大屏使用 **CSS Multi-column** 或 **CSS Grid masonry** 让短卡片自然填充，模拟翻字典看到的密集小条目
- 段落间距小、卡片间距 8px、栅格基线 4px
- 桌面端单屏可见 6-10 个卡片；移动端退化为单列但保留密度

**4. 终端风装饰元素**

- 全局顶栏伪装为终端窗口：`● ● ●` 三色圆点 + 标签 `~/vibecoding-cheatsheet ─ zsh`
- 每个章节标题前缀 `$ ` 或 `>` 提示符，颜色 `--neon-amber`
- 代码块/提示词块：左上角伪文件名 `prompt.md` / `claude.config.json`，右上角 `Copy` 按钮（hover 出现），底部一行状态栏 `-- INSERT --` / `tokens: 123`
- 章节分割用 ASCII 线 `─────────────` 或 `══════` 而非默认 `<hr>`
- 列表项 bullet 用 `▸` `»` `⟫`，不用默认圆点
- 键盘键（如 `Ctrl+K`）用 `<kbd>` 样式：等宽 + 1px neon-cyan 边框 + 微凸起阴影

**5. 赛博朋克氛围（克制）**

- 背景一层极淡的网格线（`--grid-line`，4% 透明度）+ 一层径向霓虹辉光（左上 cyan、右下 magenta，6% 透明度），不喧宾夺主
- 强调色文字带 **subtle text-shadow**（如 `0 0 6px rgba(0,240,255,0.4)`）形成霓虹辉光
- 光标 `▊` 在搜索框/标题尾闪烁（CSS `@keyframes blink`，1s 周期）
- **禁止**滥用：不做大幅 glitch 动画、不做 RGB chromatic aberration、不做满屏雨码，避免眼晕影响阅读

**6. 交互细节**

- Hover：卡片边框由 `--grid-line` 变 `--neon-cyan`，并打开微辉光
- 当前章节锚点：TOC 中该项前出现闪烁的 `▊` 光标
- 复制按钮点击后短暂变 `[ ✓ COPIED ]` + neon-green 闪一下
- 搜索框 placeholder 模拟终端 prompt：`$ search docs... (Ctrl+K)`
- 命令行式 404 / 空状态：`bash: command not found` 风格的报错文案

**7. 关键参考差异（相比 openclawcheatsheet.com 的增强点）**

| 项 | 参考站 | 本页面增强 |
|---|---|---|
| 配色 | 暗 + 橙黄为主 | 双霓虹（cyan + magenta），更赛博朋克 |
| 字体 | 无衬线为主 | **全等宽**，强化终端字典感 |
| 装饰 | emoji + `---` | ASCII 框 / 终端伪装 / 提示符前缀 |
| 动效 | 几乎无 | 克制的光标闪烁 + 霓虹辉光 |

| 国际化 | 单语 | 内置中英切换 |

### 整体布局

```
┌─────────────────────────────────────────────────┐
│ Header: Logo │ 搜索框 │ 语言切换 │ GitHub      │
├──────────┬──────────────────────────────────────┤
│          │                                       │
│ Sidebar  │   主内容区（章节内容）                │
│ (TOC)    │   ├ 标题（中/英双行）                 │
│          │   ├ 概念卡片                          │
│ 0. 简介  │   ├ 代码/模板块（带复制按钮）         │
│ 1. AI 基础│   ├ Tip / Warning / AntiPattern     │
│ 2. 提示词 │   ├ FAQ 折叠                         │
│ ...      │                                       │
│          │                                       │
└──────────┴──────────────────────────────────────┘
```

### 核心组件清单

| 组件 | 用途 |
|------|------|
| `<Layout>` | 整体布局，含 Header / Sidebar / Main |
| `<SearchPalette>` | Ctrl+K 全局搜索，基于全文索引 |
| `<LangSwitcher>` | 中文 / English / 双语对照 三档 |
| `<ConceptCard>` | 概念卡片，含图标、标题、一句话定义、详情折叠 |
| `<CodeBlock>` | 代码/提示词块，带语言标签 + 复制按钮 + 语法高亮 |
| `<PromptTemplate>` | 提示词模板专用组件，含变量占位、整段复制 |
| `<Callout>` | 4 种风格：Tip / Warning / AntiPattern / Note |
| `<ComparisonTable>` | 模型对比 / 工具对比 表格 |
| `<DecisionTree>` | 选型决策树（用 SVG 或简单卡片流程） |
| `<Glossary>` | 术语 hover 弹层（鼠标悬停看定义） |
| `<FAQ>` | 折叠式问答 |
| `<Progress>` | 学习路径打卡进度（localStorage） |

### 关键技术点

- **路由**：单页应用 + 锚点滚动；可选 `react-router` 仅做章节级路由
- **搜索**：构建期生成 `search-index.json`（标题 + 关键词 + 段落片段），运行时用 `Fuse.js` 模糊搜索
- **国际化**：JSON 词典 + 自定义 hook `useI18n()`，或 `react-i18next`（推荐自定义，更轻）
- **内容来源**：建议用 **MDX**（`@mdx-js/rollup` + Vite 插件），让内容作者写 Markdown + 嵌入 React 组件，避免内容硬编码到 TSX
- **语法高亮**：`shiki`（构建期）或 `prism-react-renderer`（运行时）
- **样式**：Tailwind + CSS variables 处理主题色（即使不做主题切换，留 token 方便未来扩展）
- **部署**：GitHub Pages / Vercel 一键

---

## 三、项目结构（拟）

```
vibecoding-cheatsheet/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── SearchPalette.tsx
│   │   ├── LangSwitcher.tsx
│   │   ├── ConceptCard.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── PromptTemplate.tsx
│   │   ├── Callout.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── Glossary.tsx
│   │   └── FAQ.tsx
│   ├── content/                # 内容源（MDX 或 TSX）
│   │   ├── zh/
│   │   │   ├── 00-intro.mdx
│   │   │   ├── 01-ai-fundamentals.mdx
│   │   │   ├── 02-prompt-engineering.mdx
│   │   │   ├── 03-vibe-coding-101.mdx
│   │   │   ├── 04-workflows.mdx
│   │   │   ├── 05-tips.mdx
│   │   │   ├── 06-anti-patterns.mdx
│   │   │   ├── 07-quick-reference.mdx
│   │   │   ├── 08-glossary.mdx
│   │   │   ├── 09-learning-path.mdx
│   │   │   └── 10-resources.mdx
│   │   └── en/  (镜像结构)
│   ├── data/
│   │   ├── models.ts           # 模型对比数据
│   │   ├── tools.ts            # 工具对比数据
│   │   ├── prompt-templates.ts # 提示词模板库
│   │   └── glossary.ts         # 术语表
│   ├── hooks/
│   │   ├── useI18n.ts
│   │   └── useSearch.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── scripts/
│   └── build-search-index.ts   # 构建期生成搜索索引
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 四、实施分阶段

按里程碑推进，每个阶段都可独立验收：

**阶段 1 · 脚手架 + 框架（0.5 天）**
- 用 Vite 初始化 React+TS 项目
- 接入 Tailwind、MDX、Shiki、Fuse.js
- 搭好 Layout / Sidebar / Header

**阶段 2 · 内容组件（1 天）**
- 实现核心组件：`CodeBlock` / `Callout` / `ConceptCard` / `PromptTemplate` / `ComparisonTable` / `Glossary`
- 用一两章测试组件

**阶段 3 · 内容编写（核心，3-5 天）**
- 按章节顺序写中文版（先把内容写对、写透）
- 同步写 英文版（与中文 1:1 对照）
- 关键数据集中维护：`data/models.ts`、`data/tools.ts`、`data/prompt-templates.ts`、`data/glossary.ts`

**阶段 4 · 交互闭环（0.5 天）**
- 全局搜索（Ctrl+K）+ 索引构建脚本
- 语言切换器
- 一键复制（已在组件中实现，做端到端验证）

**阶段 5 · 上线（0.5 天）**
- 部署到 GitHub Pages 或 Vercel
- 提供 README 与贡献指南（如果用户希望开放贡献）

---

## 五、关键文件（编写阶段的重点）

| 文件 | 关键点 |
|------|--------|
| `src/data/models.ts` | 模型对比的事实正确性（参数、价格、上下文长度需查证） |
| `src/data/tools.ts` | **Open Code / OpenClaw / Hermes 工具名需与用户最终确认**，避免误写 |
| `src/data/prompt-templates.ts` | 模板要面向新手可直接用、覆盖 ≥10 个典型场景 |
| `src/content/zh/01-ai-fundamentals.mdx` | 类比与可视化，决定新手能否看懂 |
| `src/content/zh/02-prompt-engineering.mdx` | 五大原则 + 反模式是页面价值核心 |
| `src/content/zh/04-workflows.mdx` | 黄金循环图示是页面"灵魂图" |

---

## 六、验证（如何确认做对了）

- **内容验证**：找一位完全不懂 AI 的朋友按"学习路径"走 4 周，能独立完成一个小项目则证明内容可用
- **页面验证**：
  - 桌面端 Chrome/Firefox/Safari、移动端 iOS Safari / Android Chrome 渲染正常
  - Ctrl+K 搜索能命中术语、章节标题、模板名
  - 切语言后所有内容、TOC、搜索都跟随切换
  - 每个代码/模板块复制按钮可用
- **构建验证**：`pnpm build` 成功、`pnpm preview` 可访问、bundle 体积合理（首屏 JS < 200KB gzip 为目标）
- **可读性验证**：每章 Lighthouse 可访问性 ≥ 95，移动端字号、行距适配

---

## 七、待确认项（开工前再敲定）

1. **工具名拼写**：Open Code、OpenClaw、Hermes 的官方拼写与链接需用户确认（避免我用错名字）
2. **学习路径周期**：4 周是默认建议，是否调整为 2 周/8 周？
3. **是否需要"贡献指南"**：决定是否对外开放 PR
4. **域名/部署目标**：GitHub Pages（`<user>.github.io/vibecoding-cheatsheet/`）还是自有域名？
