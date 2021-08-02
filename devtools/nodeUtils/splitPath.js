const forwardSlash = require('./forwardSlash')

module.exports = function splitPath(path) {
  return path.split(forwardSlash)
}
