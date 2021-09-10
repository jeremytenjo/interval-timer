const path = require('path')

const log = require('../../../../nodeUtils/log')
const createFile = require('../../../../nodeUtils/createFile')

const vendors = require('./getVendors.js')

module.exports = async function genDeclarationsAndEslintGlobals() {
  const declarationsOutputDir = path.join(
    process.cwd(),
    'devtools/babel/plugins/auto-import/declarations.js',
  )
  const eslintGlobalsOutputDir = path.join(
    process.cwd(),
    'devtools/babel/plugins/auto-import/eslint-globals.js',
  )
  const { vendorDeclarations, vendorEslintGlobals } = await vendors()
  const eslintGlobalsString = JSON.stringify(vendorEslintGlobals)
  const declarationsString = JSON.stringify(vendorDeclarations)
  const declarationsContent = `module.exports = () => {
    return ${declarationsString}
  }`
  const eslintGlobalsContent = `module.exports = ${eslintGlobalsString}`

  createFile(declarationsOutputDir, declarationsContent)
  createFile(eslintGlobalsOutputDir, eslintGlobalsContent)

  log('Babel Auto-Import declarations and Eslint Globals updated', {
    success: true,
  })
}
