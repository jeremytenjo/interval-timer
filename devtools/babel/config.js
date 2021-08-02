const autoImportBabelPlugin = require('./plugins/auto-import/index.js')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: 'defaults, not ie <= 11, not edge > 0, not IE_Mob 11' },
    ],
    '@babel/preset-react',
  ],

  plugins: [autoImportBabelPlugin()],
}
