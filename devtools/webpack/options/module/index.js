module.exports = async function webpackModules(payload) {
  return {
    rules: [
      require('./loaders/css.js')(payload),
      await require('./loaders/javascript.js')(payload),
    ],
  }
}
