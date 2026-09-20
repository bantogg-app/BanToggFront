import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'BanTogg',
        short_name: 'BanTogg',
        description: 'On mange quoi aujourd\'hui ?',
        theme_color: '#c2703d',
        icons: [
          // tu ajouteras tes icônes ici plus tard (192x192, 512x512)
        ]
      }
    })
  ]
})