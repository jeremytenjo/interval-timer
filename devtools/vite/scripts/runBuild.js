const shell = require('../../nodeUtils/shell')

;(async function runBuild() {
  shell('vite preview --config ./devtools/vite/config.ts --port 8080 --host')
})()
