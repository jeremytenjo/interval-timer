module.exports = async function webpackConfig({ mode = 'development', appConfig = {} }) {
  const isProd = mode === 'production'
  const isDev = mode === 'development'
  const payload = { isProd, isDev, appConfig }

  return {
    mode: payload.mode,
    entry: require('./options/entry/index.js')(payload),
    output: require('./options/output/index.js')(payload),
    devtool: require('./options/devtool/index.js')(payload),
    resolve: require('./options/resolve/index.js')(payload),
    module: await require('./options/module/index.js')(payload),
    plugins: await require('./options/plugins/index.js')(payload),
  }
}
