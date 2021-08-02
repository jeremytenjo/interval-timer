module.exports = function devtool({ isDev }) {
  return isDev ? 'cheap-module-source-map' : false
}
