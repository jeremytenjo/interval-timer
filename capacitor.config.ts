import appConfig from "./app.config"

// https://capacitorjs.com/docs/config
export default {
  appId: 'app.myintervaltimer.app',
  appName: 'my-interval-timer',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    // https://capacitorjs.com/docs/guides/live-reload#live-reload
    url: `http://${appConfig.server.local.IPAddress}:${appConfig.server.local.port}`,
    cleartext: true,
  },
}
