import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ponytail: the only Node global this config touches. Declaring it here beats
// adding @types/node as a dependency for one env var.
declare const process: { env: Record<string, string | undefined> }

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // Bind mounts do not propagate inotify events, so HMR needs polling in Docker.
    watch: process.env.DOCKER ? { usePolling: true } : undefined,
  },
})
