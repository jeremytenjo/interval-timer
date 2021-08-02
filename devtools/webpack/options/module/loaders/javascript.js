const babelConfig = require('../../../../babel/config.js')

module.exports = async function javascriptLoader() {
  return {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: babelConfig,
      },
    ],
  }
}
