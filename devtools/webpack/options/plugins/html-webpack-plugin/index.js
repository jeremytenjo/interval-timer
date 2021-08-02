const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function getHtmlWebpackPlugin() {
  return new HtmlWebpackPlugin({
    template: `${__dirname}/template.html`,
    filename: './index.html',
    appMountId: 'root',
  })
}
