import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import colors from '../tokens/colors'
import typography from '../tokens/typography'
import Button from '../../lib/components/Button/button.mui'
import TextField from '../../lib/components/forms/Textfield/textfield.mui'
import Popover from '../../lib/components/Popover/popover.mui'
import Alert from '../../lib/components/Avatar/alert.mui'
import ListItemButton from '../../lib/components/ListItemButton/listItemButton.mui'

import CssBaselineOverrides from './CssBaseline'

export const muiTheme = createTheme({
  palette: colors,
  typography: typography.variants,
  components: {
    ...CssBaselineOverrides,
    ...Button,
    ...TextField,
    ...Popover,
    ...Alert,
    ...ListItemButton,
  },
})

export default function MuiProvider({ children }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
