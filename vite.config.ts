import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative base works on GitHub Pages, Cursor publish, and any static host
  base: './',
  server: {
    host: '127.0.0.1',
    port: 5179,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 5179,
    strictPort: true,
  },
})
