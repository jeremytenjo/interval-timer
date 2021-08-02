const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = function reactRefresh({ isDev }) {
  return isDev ? new ReactRefreshWebpackPlugin() : () => null
}
