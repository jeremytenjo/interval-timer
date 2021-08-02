const getPlugins = require('./plugins')
const getResolve = require('./resolve')

module.exports = function StorybookWebpack(config) {
  config.plugins = getPlugins(config.plugins)
  config.resolve = getResolve(config.resolve)

  return config
}
