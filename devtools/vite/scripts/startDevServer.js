const shell = require('../../nodeUtils/shell')

;(async function startDevServer() {
  shell('vite --config ./devtools/vite/config.ts --host --port 3001')
})()
