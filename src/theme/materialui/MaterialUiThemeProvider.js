import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'

import colors from '../tokens/colors'
import typography from '../tokens/typography'
import Button from '../../lib/components/Button/button.mui'

const materialTheme = createMuiTheme({
  palette: colors,
  typography,
  components: {
    ...Button,
  },
})

export default function MaterialUiThemeProvider({ children }) {
  return <ThemeProvider theme={materialTheme}>{children}</ThemeProvider>
}
