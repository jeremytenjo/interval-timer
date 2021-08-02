module.exports = async function webpackConfig(options = { mode: 'development' }) {
  const isProd = options.mode === 'production'
  const isDev = options.mode === 'development'
  const payload = { ...options, isProd, isDev }

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
