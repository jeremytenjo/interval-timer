import React from 'react'

import Box from '../Box/Box.jsx'

import * as styles from './styles.ts'

export default function BottomBar({ children }) {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.innerWrapper}>{children}</Box>
    </Box>
  )
}
