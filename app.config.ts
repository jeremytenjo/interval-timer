import getIpAdress from 'my-local-ip'

import pkg from './package.json'
import themeTokens from './src/theme/tokens'

const appConfig: AppConfigTypes = {
  manifestJson: {
    name: 'My Interval Timer',
    short_name: 'Timer',
    description: pkg.description,
    start_url: '/',
    orientation: 'any',
    display: 'standalone',
    theme_color: themeTokens.colors.primary.main,
    background_color: themeTokens.colors.black.main,
  },
  analytics: {
    google: {
      measurementId: 'G-83D8302GLZ',
    },
  },
  server: {
    local: {
      port: 3001,
      IPAddress: getIpAdress(),
    },
  },
  theme: {
    tokens: themeTokens,
  },
}

export default appConfig

export type AppConfigTypes = {
  manifestJson: {
    name: string
    short_name: string
    description: string
    orientation: string
    display: string
    theme_color: string
    background_color: string
    start_url: string
  }
  analytics: {
    google: {
      measurementId: string
    }
  }
  server: {
    local: {
      port: number
      IPAddress: string
    }
  }
  theme: {
    tokens: any
  }
}
