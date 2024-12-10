// vite.config.js
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["three", "@react-three/fiber", "@react-three/drei"],
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "three-fiber": ["@react-three/fiber"],
          "three-drei": ["@react-three/drei"],
          three: ["three"],
        },
      },
    },
  },
})
