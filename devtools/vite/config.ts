import { defineConfig } from 'vite'

import appConfig, { AppConfigTypes } from '../../app.config'

export type PayloadTypes = {
  appConfig: AppConfigTypes
}

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const payload = {
    appConfig,
  }

  return {
    plugins: await (await import('./plugins')).default(payload),
    build: (await import('./build')).default(payload),
  }
})
