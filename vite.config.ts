import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

console.log("process.env.NODE_ENV:", process.env.NODE_ENV)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    proxy: {
      "/api": "http://127.0.0.1:8000/api/v1",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
})
