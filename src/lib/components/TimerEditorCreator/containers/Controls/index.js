import Box from '../../../Box'
import Button from '../../../Button'

import * as styles from './styles'

export default function Controls({ onSave, onStart }) {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.innerWrapper}>
        <Button onClick={onSave}>Save</Button>
        <Button onClick={onStart}>Start</Button>
      </Box>
    </Box>
  )
}
