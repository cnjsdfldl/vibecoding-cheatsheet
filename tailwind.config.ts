import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-elev': 'rgb(var(--bg-elev) / <alpha-value>)',
        'bg-elev2': 'rgb(var(--bg-elev2) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        'fg-dim': 'rgb(var(--fg-dim) / <alpha-value>)',
        'fg-mute': 'rgb(var(--fg-mute) / <alpha-value>)',
        cyan: 'rgb(var(--neon-cyan) / <alpha-value>)',
        magenta: 'rgb(var(--neon-magenta) / <alpha-value>)',
        amber: 'rgb(var(--neon-amber) / <alpha-value>)',
        green: 'rgb(var(--neon-green) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Sarasa Mono SC"', '"Cascadia Code"', '"Consolas"', 'ui-monospace', 'monospace'],
        display: ['"Orbitron"', '"Major Mono Display"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 12px rgb(var(--neon-cyan) / 0.45), 0 0 2px rgb(var(--neon-cyan) / 0.8)',
        'glow-magenta': '0 0 12px rgb(var(--neon-magenta) / 0.45), 0 0 2px rgb(var(--neon-magenta) / 0.8)',
        'glow-amber': '0 0 10px rgb(var(--neon-amber) / 0.4)',
      },
      animation: {
        blink: 'blink 1s steps(2, start) infinite',
        scan: 'scan 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
