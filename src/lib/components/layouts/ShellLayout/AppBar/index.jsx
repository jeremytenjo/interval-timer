import React from 'react'

import Box from '../../../Box/Box'

import * as styles from './styles'
import Title from './containers/Title'
import Items from './containers/Items'

export default function ShellLayoutTopBar() {
  return (
    <Box component='header' sx={styles.wrapper}>
      <Title />
      <Items />
    </Box>
  )
}
