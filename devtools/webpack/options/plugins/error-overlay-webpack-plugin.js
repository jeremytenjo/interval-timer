const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = function errorOverlay({ isDev }) {
  return isDev ? new ErrorOverlayPlugin() : () => null
}
