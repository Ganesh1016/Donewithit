import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
import compression from 'compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      name: 'TaskMate',
      short_name: 'Taskmate',
      start_url: '/',
      display: 'standalone',
      theme_color: '#0B2447',
      background_color: '#3E54AC',
      "splash_pages": [
        {
          "src": "./src/assets/desktop-splash.svg",
          "sizes": "1920x1080",
          "type": "image/svg"
        },
        {
          "src": "./src/assets/phone-splash.svg",
          "sizes": "1080x1920",
          "type": "image/svg"
        }
      ],
      "icons": [
        {
          "src": "./src/assets/icon1.svg",
          "sizes": "192x192",
          "type": "image/svg"
        }
      ],
      // Other manifest options...
  }}),],
  server: {
    compress: true,
    middleware: [compression()]
  }
})
