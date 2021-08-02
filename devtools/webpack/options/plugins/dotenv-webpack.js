const path = require('path')

const Dotenv = require('dotenv-webpack')

module.exports = function dotenvWebpack() {
  const envPath = path.join(process.cwd(), '.env')

  return new Dotenv({ path: envPath, silent: true })
}
