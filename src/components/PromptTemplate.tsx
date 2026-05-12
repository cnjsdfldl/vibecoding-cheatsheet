import type { ReactNode } from 'react'
import CodeBlock from './CodeBlock'

interface Props {
  title: ReactNode
  scenario?: ReactNode
  template: string
  notes?: ReactNode
}

export default function PromptTemplate({ title, scenario, template, notes }: Props) {
  return (
    <section className="my-4 border border-line/80 rounded-md bg-bg-elev/40 overflow-hidden">
      <header className="flex items-baseline justify-between gap-3 px-3 py-2 border-b border-line/60 bg-bg-elev2/40">
        <h3 className="m-0 text-[14px] font-semibold text-magenta">▸ {title}</h3>
        {scenario && <span className="text-[11px] text-fg-dim">{scenario}</span>}
      </header>
      <div className="px-3 py-2">
        <CodeBlock filename="prompt.md" lang="md">
          {template}
        </CodeBlock>
        {notes && <div className="mt-1 text-xs text-fg-dim leading-relaxed">{notes}</div>}
      </div>
    </section>
  )
}
