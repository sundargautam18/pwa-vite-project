import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    allowedHosts: true,
  },
  preview: {
    allowedHosts: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      injectRegister: false,
      injectManifest: {
        swSrc: "./sw.js",
        swDest: "./dist/sw.js",
      },
      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "AITC App",
        short_name: "aitc app",
        description: "pwa is the description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/aitc.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/aitc.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
