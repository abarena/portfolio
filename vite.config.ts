import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginSvgSpritemap('./src/assets/icons/*.svg'),
  ],
  base: '/portfolio',
})
