import { useState, type ReactNode } from 'react'
import { useI18n } from '@/hooks/useI18n'

interface Props {
  children: string
  lang?: string
  filename?: string
  status?: ReactNode
  /** Show line numbers */
  lineNumbers?: boolean
}

export default function CodeBlock({ children, lang = 'text', filename, status, lineNumbers = false }: Props) {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* noop */
    }
  }

  const lines = children.replace(/\n$/, '').split('\n')

  return (
    <div className="my-4 rounded-md border border-line/80 bg-bg-elev overflow-hidden text-[13px] shadow-[0_0_0_1px_rgb(var(--neon-cyan)/0.04)]">
      <div className="flex items-center h-8 px-3 border-b border-line/60 bg-bg-elev2/60">
        <div className="flex items-center gap-1.5">
          <span className="block w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/70" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#28C840]/70" />
        </div>
        <div className="flex-1 text-center text-xs text-fg-dim truncate select-none">
          {filename ?? `inline.${lang}`}
        </div>
        <button
          onClick={handleCopy}
          className={`text-[11px] tracking-wider uppercase border px-2 py-0.5 rounded transition-colors ${
            copied
              ? 'text-green border-green shadow-[0_0_8px_rgb(var(--neon-green)/0.5)]'
              : 'text-fg-dim border-line hover:text-cyan hover:border-cyan/60'
          }`}
        >
          {copied ? `[ ✓ ${t('copied')} ]` : `[ ${t('copy')} ]`}
        </button>
      </div>
      <pre className="m-0 p-3 overflow-x-auto leading-relaxed font-mono">
        {lineNumbers ? (
          <code>
            {lines.map((line, i) => (
              <span key={i} className="block">
                <span className="inline-block w-8 pr-2 text-right text-fg-mute select-none">
                  {String(i + 1).padStart(2, ' ')}
                </span>
                <span className="text-fg">{line || ' '}</span>
              </span>
            ))}
          </code>
        ) : (
          <code className="text-fg">{children}</code>
        )}
      </pre>
      {status && (
        <div className="border-t border-line/60 px-3 py-1 text-[11px] text-fg-dim bg-bg-elev2/40 flex justify-between">
          <span>{status}</span>
          <span className="text-fg-mute">-- INSERT --</span>
        </div>
      )}
    </div>
  )
}
