const CopyPlugin = require('copy-webpack-plugin')

module.exports = function copy() {
  return new CopyPlugin({
    patterns: [{ from: 'public', to: '' }],
  })
}
