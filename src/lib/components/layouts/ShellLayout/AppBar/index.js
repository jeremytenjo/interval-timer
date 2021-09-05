import Box from '../../../Box'

import Menu from './Menu'
import * as styles from './styles'
import Items from './Items'

export default function ShellLayoutTopBar() {
  return (
    <Box component='header' sx={styles.wrapper}>
      <Menu />
      <Items />
    </Box>
  )
}
