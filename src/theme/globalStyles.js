import GlobalStyles from '@material-ui/core/GlobalStyles'

const noMarginPadding = {
  padding: 0,
  margin: 0,
}

export default () => (
  <GlobalStyles
    styles={{
      body: {
        webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
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
