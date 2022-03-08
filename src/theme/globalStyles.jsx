import GlobalStyles from '@mui/material/GlobalStyles'

import colors from './tokens/colors'

const noMarginPadding = {
  padding: 0,
  margin: 0,
}

export default () => (
  <GlobalStyles
    styles={{
      html: {
        '& input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button':
          {
            WebkitAppearance: 'none',
            margin: '0px',
          },
      },
      body: {
        webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        boxSizing: 'border-box',
        backgroundColor: colors.backgroundColor,
        color: 'white',
        margin: 0,
        fontFamily: 'SourceSandProRegular',
        overflowX: 'hidden',
      },
      '*': {
        boxSizing: 'border-box',
      },
      p: noMarginPadding,
      h1: noMarginPadding,
      h2: noMarginPadding,
      h3: noMarginPadding,
      h4: noMarginPadding,
      h5: noMarginPadding,
      h6: noMarginPadding,
      '.centerPage': {
        padding: '20px',
        maxWidth: '500px',
        margin: 'auto',
        paddingBottom: '80px',
      },
    }}
  />
)
