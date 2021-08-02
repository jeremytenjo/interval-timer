const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = function cleanWebpackPluginWebpack(isProd) {
  const pathsToClean = ['build']
  const cleanOptions = { root: process.cwd(), verbose: true }

  return isProd ? new CleanWebpackPlugin({ pathsToClean, cleanOptions }) : () => null
}
