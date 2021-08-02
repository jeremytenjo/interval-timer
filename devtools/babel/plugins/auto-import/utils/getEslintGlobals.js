module.exports = function getEslintGlobals(data) {
  const eslintGlobals = {}
  if (data.default) {
    eslintGlobals[data.default] = 'readonly'
  }

  if (data.members) {
    data.members.map((item) => {
      eslintGlobals[item] = 'readonly'
    })
  }

  return eslintGlobals
}
