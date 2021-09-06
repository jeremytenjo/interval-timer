import Box from '../../../Box'
import Button from '../../../Button'

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
