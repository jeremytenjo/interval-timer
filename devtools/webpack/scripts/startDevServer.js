const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const chalk = require('chalk')

const appConfig = require('../../../app.config')
const genDeclarationsAndEslintGlobals = require('../../babel/plugins/auto-import/utils/genDeclarationsAndEslintGlobals')
const getWebpackConfig = require('../getWebpackConfig.js')

;(async function startDevServer() {
  await genDeclarationsAndEslintGlobals()
  const webpackConfig = await getWebpackConfig()
  const compiler = webpack(webpackConfig)
  const port = appConfig.server.local.port
  const host = '0.0.0.0'
  const devServerOptions = {
    open: false,
    host,
    hot: true,
    overlay: true,
    clientLogLevel: 'silent',
    stats: 'errors-only',
    historyApiFallback: true,
  }
  const server = new WebpackDevServer(compiler, devServerOptions)

  server.listen(port, host, () => {
    console.clear()
    console.log(chalk.yellow(`You can now view your app in the browser.`))
    console.log()
    console.log(
      `  ${chalk.cyanBright('Localhost:')}        http://localhost:${chalk.cyanBright(
        port,
      )}/`,
    )
    console.log(
      `  ${chalk.cyanBright('On Your Network:')}  http://${
        appConfig.server.local.IPAddress
      }:${chalk.cyanBright(port)}/`,
    )
    console.log()
    console.log(chalk.cyan('Note that the development build is not optimized.'))
    console.log(
      `${chalk.cyan('To create a production build, run')} ${chalk.yellow(
        'npm run build',
      )}`,
    )
    console.log()
  })
})()
