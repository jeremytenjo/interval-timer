module.exports = function cssLoader() {
  return {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  }
}
