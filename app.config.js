module.exports = {
  server: {
    local: {
      port: 3001,
      IPAddress: require('my-local-ip')(),
    },
  },
}
