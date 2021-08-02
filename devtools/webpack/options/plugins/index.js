module.exports = async function webpackPlugins(payload) {
  return [
    require('./clean-webpack-plugin.js')(payload),
    require('./copy-webpack-plugin.js')(payload),
    require('./dotenv-webpack.js')(payload),
    require('./eslint-webpack-plugin.js')(payload),
    require('./react-refresh-webpack-plugin.js')(payload),
    require('./error-overlay-webpack-plugin.js')(payload),
    require('./html-webpack-plugin/index.js')(payload),
  ]
}
