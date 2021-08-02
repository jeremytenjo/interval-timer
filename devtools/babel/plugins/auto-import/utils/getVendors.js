const path = require('path')

const filehound = require('filehound')

const getEslintGlobals = require('./getEslintGlobals')

module.exports = async function getVendors() {
  const vendorDeclarations = []
  let vendorEslintGlobals = {}
  let vendors = []

  try {
    vendors = await filehound
      .create()
      .path(
        path.join(
          process.cwd(),
          'devtools',
          'babel',
          'plugins',
          'auto-import',
          'vendors',
        ),
      )
      .discard(['index'])
      .find()
  } catch (error) {
    vendors = []
  }

  vendors.forEach((vendor) => {
    const data = require(vendor)
    const eslintGlobals = getEslintGlobals(data)

    vendorDeclarations.push(data)
    vendorEslintGlobals = { ...vendorEslintGlobals, ...eslintGlobals }
  })

  return { vendorDeclarations, vendorEslintGlobals }
}
