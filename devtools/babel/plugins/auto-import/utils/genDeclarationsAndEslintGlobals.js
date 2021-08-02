const path = require('path')

const filehound = require('filehound')
const mergeDeclarations = require('@useweb/lib/devtools/babel/plugins/auto-import/utils/localLibs/mergeDeclarations')
const mergeEslintGlobals = require('@useweb/lib/devtools/babel/plugins/auto-import/utils/localLibs/mergeEslintGlobals')

const log = require('../../../../nodeUtils/log')
const createFile = require('../../../../nodeUtils/createFile')
const splitPath = require('../../../../nodeUtils/splitPath')

const vendors = require('./getVendors.js')

const getItems = async (paths) => {
  const items = await filehound
    .create()
    .path(paths)
    .match(['*index.js'])
    .discard(['Ui/*'])
    .find()

  return items
}

module.exports = async function genDeclarationsAndEslintGlobals() {
  // add paths to '../../../webpack/options/resolve/index`
  const libPaths = path.join(process.cwd(), 'src', 'lib')
  const libItems = await getItems(libPaths)
  const items = [...libItems]

  const declarationsOutputDir = path.join(
    process.cwd(),
    'devtools/babel/plugins/auto-import/declarations.js',
  )
  const eslintGlobalsOutputDir = path.join(
    process.cwd(),
    'devtools/babel/plugins/auto-import/eslint-globals.js',
  )
  const { vendorDeclarations, vendorEslintGlobals } = await vendors()
  const declarations = [...vendorDeclarations]
  const eslintGlobals = { ...vendorEslintGlobals }

  items.map((item) => {
    const itemName = path.parse(path.parse(item).dir).name
    const split = splitPath(item)
    const index = split.indexOf('lib')
    const slice = split.slice(index, split.length)
    const itemPath = slice.join('/')

    const declaration = {
      default: itemName,
      path: itemPath,
    }

    declarations.push(declaration)
    eslintGlobals[itemName] = 'readonly'
  })

  const eslintGlobalsMaster = mergeEslintGlobals(eslintGlobals)
  const declarationsMaster = mergeDeclarations(declarations)
  const eslintGlobalsString = JSON.stringify(eslintGlobalsMaster)
  const declarationsString = JSON.stringify(declarationsMaster)
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
