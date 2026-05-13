import { useEffect, useState } from 'react'
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
  /** Cap the rendered figure width (e.g. '220px', '60%'). Default: 100% of container. */
  maxWidth?: string
  /** Allow click-to-zoom into a fullscreen lightbox. Default: true. */
  zoomable?: boolean
}

/**
 * Terminal-window-framed image that swaps source by current language.
 * Conventions: zh → `{name}-CH.{ext}`, en → `{name}-EN.{ext}`.
 */
export default function BiImage({ name, alt, ext = 'png', caption, maxWidth, zoomable = true }: Props) {
  const { lang, pick } = useI18n()
  const [zoomed, setZoomed] = useState(false)
  const suffix = lang === 'zh' ? 'CH' : 'EN'
  const src = `${BASE}images/${name}-${suffix}.${ext}`
  const altText = alt ? pick(alt) : `${name} (${suffix})`

  useEffect(() => {
    if (!zoomed) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomed(false)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [zoomed])

  return (
    <>
      <figure
        className="my-4 border border-line/80 rounded-md bg-bg-elev/40 overflow-hidden hover:border-cyan/40 hover:shadow-glow-cyan transition-all"
        style={maxWidth ? { maxWidth } : undefined}
      >
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
          onClick={zoomable ? () => setZoomed(true) : undefined}
          className={`block w-full h-auto ${zoomable ? 'cursor-zoom-in' : ''}`}
        />
        {caption && (
          <figcaption className="px-3 py-1.5 text-[11px] text-fg-dim border-t border-line/60 bg-bg-elev2/30">
            {pick(caption)}
          </figcaption>
        )}
      </figure>

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={altText}
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-zoom-out p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation()
              setZoomed(false)
            }}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 px-2 py-1 text-[12px] font-mono text-cyan border border-cyan/50 rounded hover:bg-cyan/10"
          >
            [ ESC ] ✕
          </button>
          <img
            src={src}
            alt={altText}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain cursor-default border border-line/60 rounded shadow-2xl"
          />
        </div>
      )}
    </>
  )
}
