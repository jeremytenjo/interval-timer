const gTag = require('./analytics/google/gTag')

module.exports = function headHtmlSnippet({ appConfig }) {
  const appColors = appConfig.theme.tokens.colors

  return `
  <title>${appConfig.manifestJson.name}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0">
  <link rel="apple-touch-icon" sizes="180x180" href="images/logo/apple-touch-icon.png">
  <link rel="shortcut icon" href="images/logo/logo.svg">
  <meta name="description" content="${
    appConfig.manifestJson.description || 'App description'
  }">
  <meta name="theme-color" content="${appColors.themeColor || 'white'}">

  ${appConfig?.analytics?.google && gTag(appConfig?.analytics?.google)}

  <style> 
    html { 
      background-color: ${appColors.backgroundColor || 'white'}; 
    } 
  </style>
  `
}
