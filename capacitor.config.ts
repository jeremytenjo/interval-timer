import { CapacitorConfig } from '@capacitor/cli'

import appConfig from './app.config'

const isProd = process.env.ENV === 'production'
const isDev = !isProd

// https://capacitorjs.com/docs/config
const config: CapacitorConfig = {
  appId: 'app.myintervaltimer.app',
  appName: 'My Interval Timer',
  webDir: 'build',
  bundledWebRuntime: false,
  server: isDev
    ? {
        // https://capacitorjs.com/docs/guides/live-reload#live-reload
        url: `http://${appConfig.server.local.IPAddress}:${appConfig.server.local.port}`,
        cleartext: true,
      }
    : {},
}

export default config
