import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/wonderful-snow/', // Voeg deze regel toe
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style.custom.css";`,
      },
    },
  },
});
