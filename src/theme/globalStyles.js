import GlobalStyles from '@mui/material/GlobalStyles'

const noMarginPadding = {
  padding: 0,
  margin: 0,
}

export default () => (
  <GlobalStyles
    styles={{
      html: {
        overscrollBehaviorY: 'contain',
        '& input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button':
          {
            '-webkit-appearance': 'none',
            margin: '0px',
          },
      },
      body: {
        webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        boxSizing: 'border-box',
        backgroundColor: '#1C1929',
        color: 'white',
        margin: 0,
        fontFamily: 'SourceSandProRegular',
        overscrollBehaviorY: 'contain',
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
    }}
  />
)
