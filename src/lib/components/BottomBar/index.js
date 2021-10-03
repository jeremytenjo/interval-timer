import Box from 'lib/components/Box'

import * as styles from './styles.js'

export default function BottomBar({ children }) {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.innerWrapper}>{children}</Box>
    </Box>
  )
}
