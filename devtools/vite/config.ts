import { defineConfig } from 'vite'

import appConfig, { AppConfigTypes } from '../../app.config'

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const payload = {
    appConfig,
    mode,
  }

  return {
    plugins: await (await import('./plugins')).default(payload),
    build: (await import('./build')).default(payload),
  }
})

export type PayloadTypes = {
  appConfig: AppConfigTypes
  mode: string
}
