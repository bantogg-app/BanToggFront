import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "BanTogg",
        short_name: "BanTogg",
        theme_color: "#c2703d",
        background_color: "#c2703d", // Ajouté pour le splash screen
        display: "standalone",        // Indispensable pour masquer la barre du navigateur
        icons: [
          { 
            src: "/icon-192.png", 
            sizes: "192x192", 
            type: "image/png",
            purpose: "any maskable" // Évite les bandes noires sur Android
          },
          { 
            src: "/icon-512.png", 
            sizes: "512x512", 
            type: "image/png",
            purpose: "any maskable" // Évite les bandes noires sur Android
          },
        ],
      },
    }),
  ],
});
