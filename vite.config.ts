import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// In CI we deploy to GitHub Pages under /vibecoding-cheatsheet/.
// Locally (vite dev / preview) we want assets served from /.
const base = process.env.GITHUB_ACTIONS ? '/vibecoding-cheatsheet/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
})
