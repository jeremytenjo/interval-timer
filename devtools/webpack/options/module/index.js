module.exports = async function webpackModules(payload) {
  return {
    rules: [
      require('./loaders/otherFiles.js')(payload),
      require('./loaders/css.js')(payload),
      await require('./loaders/javascript.js')(payload),
    ],
  }
}
