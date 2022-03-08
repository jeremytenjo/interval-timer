import shell from '../../nodeUtils/shell.js'
;(async function startDevServer() {
  shell('vite --config ./devtools/vite/vite.ts --host --port 3001')
})()
