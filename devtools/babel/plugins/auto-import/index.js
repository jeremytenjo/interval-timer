const declarations = require('./declarations.js')

module.exports = function autoImportBabelPlugin() {
  return [
    require('babel-plugin-auto-import'),
    {
      declarations: declarations(),
    },
  ]
}
