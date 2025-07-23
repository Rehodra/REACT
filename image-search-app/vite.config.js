import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      tailwindcss: path.resolve(__dirname, './node_modules/tailwindcss'),
      daisyui: path.resolve(__dirname, './node_modules/daisyui'),
    },
  },
})
