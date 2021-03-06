import getIpAdress from './devtools/utils/node/getIpAdress.js'
import pkg from './package.json'
import themeTokens from './src/theme/tokens/tokens.js'

export default async function appConfig(): Promise<AppConfigTypes> {
  return {
    manifestJson: {
      name: 'My Interval Timer',
      short_name: 'Timer',
      description: pkg.description,
      start_url: '/',
      orientation: 'any',
      display: 'standalone',
      theme_color: themeTokens.colors.themeColor,
      background_color: themeTokens.colors.backgroundColor,
      screenshots: [
        {
          src: 'images/manifest/screenshot-create.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-home.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-sync.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-edit.png',
          sizes: '360x640',
          type: 'image/png',
        },
      ],
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
}

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
    screenshots: {
      src: string
      sizes: string
      type: string
    }[]
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
