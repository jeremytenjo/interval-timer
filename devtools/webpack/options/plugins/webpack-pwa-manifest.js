const path = require('path')

const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = function cleanWebpackPluginWebpack({ appConfig }) {
  return new WebpackPwaManifest({
    icons: [
      {
        src: path.resolve('public/images/logo/logo.svg'),
        sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
      },
    ],
    ...appConfig.manifestJson,
  })
}
