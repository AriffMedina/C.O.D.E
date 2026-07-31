import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// El repo se llama "C.O.D.E", así que GitHub Pages sirve el sitio desde /C.O.D.E/
export default defineConfig({
  base: '/C.O.D.E/',
  plugins: [react(), tailwindcss()],
})
