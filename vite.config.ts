import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", 
  build: {
    rollupOptions: {
      input: {
        // 1. The Popup UI
        main: resolve(__dirname, "index.html"),
        // 2. The Background Service Worker
        background: resolve(__dirname, "src/background/index.ts"),
        // 3. The Strava Content Script
        content: resolve(__dirname, "src/content/main.ts"),
      },
      output: {
        // Keeps the filenames predictable (e.g., content.js instead of content-AX32.js)
        // so they match your manifest.json references.
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});