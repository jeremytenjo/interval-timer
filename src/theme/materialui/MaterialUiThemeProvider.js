import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import colors from '../tokens/colors'
import typography from '../tokens/typography'
import Button from '../../lib/components/Button/button.mui'

import CssBaselineOverrides from './CssBaseline'

const materialTheme = createTheme({
  palette: colors,
  typography: typography.variants,
  components: {
    ...CssBaselineOverrides,
    ...Button,
  },
})

export default function MaterialUiThemeProvider({ children }) {
  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
