module.exports = {
  manifestJson: {
    name: 'My Interval Timer',
    short_name: 'Timer',
    description: `Handy app that helps you keep track of your work and rest periods during workouts.`,
    orientation: 'portrait',
    display: 'standalone',
  },
  server: {
    local: {
      port: 3001,
      IPAddress: require('my-local-ip')(),
    },
  },
  theme: {
    tokens: {
      colors: require('./src/theme/tokens/colors'),
    },
  },
}
