const pkg = require('./package.json')
const themeTokens = require('./src/theme/tokens')

module.exports = {
  manifestJson: {
    name: 'My Interval Timer',
    short_name: 'Timer',
    description: pkg.description,
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
      IPAddress: require('my-local-ip')(),
    },
  },
  theme: {
    tokens: themeTokens,
  },
}
