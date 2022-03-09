import React from 'react'

import GlobalStyles from './globalStyles'
import MuiProvider from './mui/MuiProvider'

export default function ThemeProvider({ children }) {
  return (
    <MuiProvider>
      <GlobalStyles />
      {children}
    </MuiProvider>
  )
}
