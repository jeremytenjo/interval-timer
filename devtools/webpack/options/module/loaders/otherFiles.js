module.exports = function otherFileLoaders() {
  return {
    test: /\.mp3$/,
    use: ['file-loader'],
  }
}
