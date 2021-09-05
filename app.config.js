const colors = require('./src/theme/tokens/colors')

module.exports = {
  manifestJson: {
    name: 'My Interval Timer',
    short_name: 'Timer',
    description: `Handy app that helps you keep track of your work and rest periods during workouts.`,
    orientation: 'portrait',
    display: 'standalone',
    theme_color: colors.primary.main,
    background_color: colors.black.main,
  },
  server: {
    local: {
      port: 3001,
      IPAddress: require('my-local-ip')(),
    },
  },
  theme: {
    tokens: {
      colors,
    },
  },
}
