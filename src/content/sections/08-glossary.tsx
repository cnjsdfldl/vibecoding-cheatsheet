import Section from '@/components/Section'
import SubHeading from '@/components/SubHeading'
import BiP from '@/components/BiP'
import { useI18n } from '@/hooks/useI18n'
import { GLOSSARY } from '@/data/glossary'

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export default function Glossary() {
  const { pick } = useI18n()
  return (
    <Section
      id="glossary"
      num="8"
      title={{ zh: '术语表', en: 'Glossary' }}
      subtitle={{ zh: '搞不清的术语，从这里查', en: 'Look up any term you get stuck on' }}
    >
      <BiP
        text={{
          zh: '按字母顺序排列。Ctrl+K 直接搜术语名最快。',
          en: 'Alphabetical order. Ctrl+K + term name is fastest.',
        }}
      />

      <SubHeading id="glossary-list" title={{ zh: '术语速查', en: 'Term lookup' }} />

      <div className="border border-line/70 rounded-md overflow-hidden bg-bg-elev/40 my-4">
        {GLOSSARY.map((g, i) => (
          <div
            key={g.term}
            id={`g-${slug(g.term)}`}
            className={`p-3 grid grid-cols-[1fr_2fr] gap-3 items-start scroll-mt-24 ${
              i !== GLOSSARY.length - 1 ? 'border-b border-line/40' : ''
            } hover:bg-cyan/[0.03]`}
          >
            <div className="min-w-0">
              <div className="text-cyan font-semibold text-[14px]">{g.term}</div>
              {g.aliases && (
                <div className="mt-0.5 text-[11px] text-fg-mute">{g.aliases.join(' / ')}</div>
              )}
            </div>
            <div className="text-[13px] text-fg/90 leading-relaxed">
              <p className="m-0">{pick(g.def)}</p>
              {g.analogy && (
                <p className="m-0 mt-1 text-fg-dim italic">
                  <span className="text-amber not-italic">≈ </span>
                  {pick(g.analogy)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
