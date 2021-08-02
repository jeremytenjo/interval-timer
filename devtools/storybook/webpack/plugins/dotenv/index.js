const path = require('path')

const Dotenv = require('dotenv-webpack')

const deepMerge = require('../../../../utils/deepMerge')

module.exports = (defaultEnvs) => {
  if (!defaultEnvs.definitions['process.env']) {
    return defaultEnvs
  }
  const DefinePlugin = defaultEnvs
  const envPath = path.join(process.cwd(), 'lib', '.env')
  const customEnvsInitial = new Dotenv({ path: envPath, silent: true })
  const customEnvs = {}

  for (const [key, value] of Object.entries(customEnvsInitial.definitions)) {
    customEnvs[key.replace('process.env.', '')] = value
  }

  const processEnvDefinitions = deepMerge(
    defaultEnvs.definitions['process.env'],
    customEnvs,
  )

  DefinePlugin.definitions['process.env'] = processEnvDefinitions

  return DefinePlugin
}
