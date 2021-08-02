const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = function eslint() {
  const options = {
    extensions: ['js', 'cjs'],
    fix: true,
  }

  return new ESLintPlugin(options)
}
