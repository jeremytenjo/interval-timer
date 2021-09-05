module.exports = function headHtmlSnippet({ appConfig }) {
  const appColors = appConfig.theme.tokens.colors

  return `
  <title>${appConfig.manifestJson.name}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0">
  <link rel="shortcut icon" href="images/logo/logo.svg">
  <meta name="theme-color" content="${appColors.black.main}">
  <meta name="description" content="${appConfig.manifestJson.description}">
  `
}
