const shell = require('../../nodeUtils/shell')

;(async function buildApp() {
  shell('vite build --config ./devtools/vite/config.js')
})()
