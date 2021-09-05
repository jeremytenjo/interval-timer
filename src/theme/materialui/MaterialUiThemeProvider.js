import { ThemeProvider, createTheme } from '@mui/material/styles'

import colors from '../tokens/colors'
import typography from '../tokens/typography'
import Button from '../../lib/components/Button/button.mui'

import CssBaseline from './CssBaseline'

const materialTheme = createTheme({
  palette: colors,
  typography,
  components: {
    ...CssBaseline,
    ...Button,
  },
})

export default function MaterialUiThemeProvider({ children }) {
  return <ThemeProvider theme={materialTheme}>{children}</ThemeProvider>
}
