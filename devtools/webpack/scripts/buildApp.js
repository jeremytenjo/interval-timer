const webpack = require('webpack')
const chalk = require('chalk')

const getWebpackConfig = require('../getWebpackConfig.js')

;(async function buildApp() {
  console.clear()
  console.log(chalk.cyan('Building app...'))

  const webpackConfig = await getWebpackConfig({ mode: 'production' })

  webpack(webpackConfig, (err, stats) => {
    console.log()
    if (err || stats.hasErrors()) {
      console.log(chalk.keyword('red')('❌') + ' Build error:')
      console.log()
      console.error(stats?.toJson()?.errors?.[0]?.message)
    } else {
      console.log(
        stats.toString({
          colors: true,
        }),
      )
      console.log()
      console.log(
        chalk.keyword('lightgreen')('✔') +
          ' Build completed, run ' +
          chalk.yellow('npm run serve') +
          ' to test built app.',
      )
    }
    console.log()
  })
})()
