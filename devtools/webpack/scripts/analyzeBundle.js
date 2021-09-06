const path = require('path')

const shell = require('../../nodeUtils/shell')

;(async function analyzeBundle() {
  shell(
    `webpack-bundle-analyzer --port 4200 ${path.join(process.cwd(), 'build/stats.json')}`,
  )
})()
