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
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico','favicon-32x32.png','favicon-16x16.png','apple-touch-icon.png'],
        manifest: {
          name : 'Greetly',
          short_name: 'Greetly',
          start_url: '/',
          display: 'standalone',
          theme_color:'#ffffff',
          background_color:'#ffffff',
          icons: [
            {
              src: 'android-chrome-192x192.png',
              sizes: '192x192',
            },
            {
              src: 'android-chrome-512x512.png',
              sizes: '512x512',
            }
          ]
        } 
      })
    ],
})
