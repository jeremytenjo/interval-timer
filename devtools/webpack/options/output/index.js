const path = require('path')

module.exports = function webpackOutput() {
  return {
    chunkFilename: 'js/[name].[chunkhash].js',
    filename: 'js/[name].[fullhash].js',
    path: path.join(process.cwd(), 'build'),
    publicPath: '/',
  }
}
