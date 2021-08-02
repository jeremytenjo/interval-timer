const fs = require('fs')

/**
 * @example
 * doesFolderOrFileExist(dir)
 */
module.exports = (path) => fs.existsSync(path)
