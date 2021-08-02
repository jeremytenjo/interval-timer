const appConfig = require('./app.config')

// https://capacitorjs.com/docs/config
module.exports = {
  appId: 'app.footycity.app',
  appName: 'starter-capacitorjs',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    // https://capacitorjs.com/docs/guides/live-reload#live-reload
    url: `http://${appConfig.server.local.IPAddress}:${appConfig.server.local.port}`,
    cleartext: true,
  },
}
