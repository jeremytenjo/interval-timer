import { defineConfig } from 'vite'

import appConfig, { AppConfigTypes } from '../../app.config'

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const payload = {
    appConfig,
    isProdMode: mode === 'production',
    isDevMode: mode === 'development',
  }

  return {
    plugins: await (await import('./plugins')).default(payload),
    build: (await import('./build')).default(payload),
  }
})

export type PayloadTypes = {
  appConfig: AppConfigTypes
  isProdMode: boolean
  isDevMode: boolean
}
