import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    open: false,
  },

  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
  },

  build: {
    target: "esnext",
    sourcemap: false,
    minify: "esbuild",
    cssMinify: true,
    chunk
