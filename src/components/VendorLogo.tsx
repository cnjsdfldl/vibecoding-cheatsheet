interface Props {
  vendor: string
  size?: number
  className?: string
}

/**
 * Minimal, trademark-safe stylized brand marks for the model lineup.
 * Hand-drawn SVG approximations — close enough to be recognizable,
 * simple enough to be unambiguously decorative.
 */
export default function VendorLogo({ vendor, size = 16, className = '' }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
    className: `inline-block shrink-0 ${className}`,
  } as const

  switch (vendor) {
    case 'Anthropic':
      // Stylized "A" mark in Anthropic's signature warm orange
      return (
        <svg {...common}>
          <path
            d="M11.3 5h3.4L23 27h-4.1l-1.8-5h-6.2L9.1 27H5L11.3 5zm.8 13.5h4.3L14.1 12l-2 6.5z"
            fill="#D97757"
          />
        </svg>
      )

    case 'OpenAI':
      // Three rotated ellipses approximating OpenAI's six-fold knot
      return (
        <svg {...common}>
          <g fill="none" stroke="#D7E0EA" strokeWidth="2.4">
            <ellipse cx="16" cy="16" rx="11" ry="4.5" />
            <ellipse cx="16" cy="16" rx="11" ry="4.5" transform="rotate(60 16 16)" />
            <ellipse cx="16" cy="16" rx="11" ry="4.5" transform="rotate(120 16 16)" />
          </g>
        </svg>
      )

    case 'Google':
      // Gemini-style 4-pointed sparkle in Google blue/purple
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="gemini-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="100%" stopColor="#A142F4" />
            </linearGradient>
          </defs>
          <path
            d="M16 3 L18 14 L29 16 L18 18 L16 29 L14 18 L3 16 L14 14 Z"
            fill="url(#gemini-g)"
          />
        </svg>
      )

    case 'DeepSeek':
      // Stylized whale silhouette in DeepSeek blue
      return (
        <svg {...common}>
          <path
            d="M3 17c3-5 9-7 14-5 3 1 6 1 8-1l3-2-1 5c-1 4-5 7-11 7-6 0-11-1-13-4z"
            fill="#4D6BFE"
          />
          <circle cx="22" cy="13" r="1.1" fill="#0B0F14" />
        </svg>
      )

    case 'Alibaba':
      // Stylized "Q" mark (Qwen) in Alibaba orange
      return (
        <svg {...common}>
          <circle cx="14" cy="15" r="8" fill="none" stroke="#FF6A00" strokeWidth="2.6" />
          <line x1="19" y1="20" x2="25" y2="26" stroke="#FF6A00" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      )

    default:
      // Generic fallback: a hollow square monogram
      return (
        <svg {...common}>
          <rect x="6" y="6" width="20" height="20" rx="3" fill="none" stroke="#7C8896" strokeWidth="2" />
          <text x="16" y="21" textAnchor="middle" fontSize="14" fontFamily="monospace" fill="#7C8896">
            {vendor.slice(0, 1).toUpperCase()}
          </text>
        </svg>
      )
  }
}
