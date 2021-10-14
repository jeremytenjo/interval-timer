import Box from '../Box/index.jsx'

import * as styles from './styles.ts'

export default function BottomBar({ children }) {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.innerWrapper}>{children}</Box>
    </Box>
  )
}
