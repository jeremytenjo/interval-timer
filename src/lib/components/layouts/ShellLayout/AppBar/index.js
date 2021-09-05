import Box from '../../../Box'

import * as styles from './styles'
import Menu from './containers/Menu'
import Items from './containers/Items'

export default function ShellLayoutTopBar() {
  return (
    <Box component='header' sx={styles.wrapper}>
      <Menu />
      <Items />
    </Box>
  )
}
