import { useMemo } from 'react'
import { I18nContext, makePick, makeT } from '@/hooks/useI18n'
import { useLang } from '@/hooks/useLang'
import Layout from '@/components/Layout'
import Sections from '@/content/Sections'

export default function App() {
  const [lang, setLang] = useLang()

  const ctx = useMemo(
    () => ({
      lang,
      setLang,
      t: makeT(lang),
      pick: makePick(lang),
    }),
    [lang, setLang]
  )

  return (
    <I18nContext.Provider value={ctx}>
      <Layout>
        <Sections />
      </Layout>
    </I18nContext.Provider>
  )
}
