import Box from '../../../../lib/components/Box'
import Button from '../../../../lib/components/Button'

import * as styles from './styles'

export default function TimerControls() {
  const started = false

  return (
    <Box sx={styles.wrapper}>
      {!started && <Button>Start</Button>}

      {started && (
        <Box sx={styles.innerWrapper}>
          <Button>Pause</Button>
          <Button>Stop</Button>
        </Box>
      )}
    </Box>
  )
}
