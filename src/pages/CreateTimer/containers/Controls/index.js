import Box from '../../../../lib/components/Box'
import Button from '../../../../lib/components/Button'

import * as styles from './styles'

export default function Controls() {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.innerWrapper}>
        <Button>Save</Button>
        <Button>Start</Button>
      </Box>
    </Box>
  )
}
