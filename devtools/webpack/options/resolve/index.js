const path = require('path')

module.exports = function webpackResolve() {
  return {
    alias: {
      'lib/components': path.resolve(process.cwd(), 'src/lib/components/'),
      'lib/utils': path.resolve(process.cwd(), 'src/lib/utils/'),
    },
  }
}
