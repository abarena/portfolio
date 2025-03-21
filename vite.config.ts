import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSvgSpriteWrapper({
      icons: 'src/icons/*.svg',
      outputDir: './src/',
      generateType: true,
      typeName: 'SpriteName',
      typeFileName: 'SVG',
      typeOutputDir: './src/types',
    })
  ],
})
