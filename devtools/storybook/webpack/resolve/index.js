const deepMerge = require('../../../utils/deepMerge')

const globalResolveConfig = require('./../../../webpack/options/resolve')

module.exports = (storybookDefaultResolve) => {
  const globalResolve = globalResolveConfig()
  const resolveConfig = deepMerge(storybookDefaultResolve, globalResolve)

  return resolveConfig
}
