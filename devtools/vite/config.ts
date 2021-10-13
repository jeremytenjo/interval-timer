import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    plugins: await (await import('./plugins')).default(),
    build: (await import('./build')).default(),
  }
})
