import { useI18n } from '@/hooks/useI18n'
import type { BiText } from '@/i18n/types'

const BASE = import.meta.env.BASE_URL

interface Props {
  /** Base file name. Files must exist at public/images/{name}-CH.png and {name}-EN.png */
  name: string
  alt?: BiText
  /** File extension, default 'png' */
  ext?: 'png' | 'jpg' | 'webp' | 'svg'
  caption?: BiText
}

/**
 * Terminal-window-framed image that swaps source by current language.
 * Conventions: zh → `{name}-CH.{ext}`, en → `{name}-EN.{ext}`.
 */
export default function BiImage({ name, alt, ext = 'png', caption }: Props) {
  const { lang, pick } = useI18n()
  const suffix = lang === 'zh' ? 'CH' : 'EN'
  const src = `${BASE}images/${name}-${suffix}.${ext}`
  const altText = alt ? pick(alt) : `${name} (${suffix})`

  return (
    <figure className="my-4 border border-line/80 rounded-md bg-bg-elev/40 overflow-hidden hover:border-cyan/40 hover:shadow-glow-cyan transition-all">
      <div className="flex items-center h-7 px-3 border-b border-line/60 bg-bg-elev2/50">
        <div className="flex items-center gap-1.5">
          <span className="block w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/70" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#28C840]/70" />
        </div>
        <span className="flex-1 text-center text-[11px] text-fg-dim truncate select-none">
          {name}.{ext} · {suffix}
        </span>
      </div>
      <img
        key={lang}
        src={src}
        alt={altText}
        loading="lazy"
        className="block w-full h-auto"
      />
      {caption && (
        <figcaption className="px-3 py-1.5 text-[11px] text-fg-dim border-t border-line/60 bg-bg-elev2/30">
          {pick(caption)}
        </figcaption>
      )}
    </figure>
  )
}
