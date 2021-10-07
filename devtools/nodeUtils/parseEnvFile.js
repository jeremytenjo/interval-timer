const dotenv = require('dotenv')
const dotenvParseVariables = require('dotenv-parse-variables')

module.exports = function parseEnvFile({ envFilePath }) {
  const env = dotenv.config({ path: envFilePath })

  if (env.error) throw env.error

  const parsedEnvFile = dotenvParseVariables(env.parsed)

  return parsedEnvFile
}
