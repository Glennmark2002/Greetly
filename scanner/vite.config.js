import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: 
    [
      react(),  
      VitePWA({
        srcDir: 'public',
        filename: 'site.webmanifest',
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon-32x32.png',
          'favicon-16x16.png',
          'apple-touch-icon.png'
        ],
        manifest: false 
      })
    
    ],
})
