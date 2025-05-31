import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for local development only (no base path)
export default defineConfig({
  plugins: [react()]
})
