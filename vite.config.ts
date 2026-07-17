import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Permet d'importer via l'alias "@" (ex: "@/theme/theme") plutôt que des
    // chemins relatifs à rallonge. À garder synchronisé avec "paths" du tsconfig.
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
