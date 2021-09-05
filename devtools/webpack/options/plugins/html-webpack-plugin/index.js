const HtmlWebpackPlugin = require('html-webpack-plugin')

const headHtmlSnippet = require('./headHtmlSnippet')

module.exports = function getHtmlWebpackPlugin() {
  return new HtmlWebpackPlugin({
    template: `${__dirname}/template.html`,
    filename: './index.html',
    appMountId: 'root',
    headHtmlSnippet: headHtmlSnippet(),
  })
}
