import Box from '../../../../lib/components/Box'
import Button from '../../../../lib/components/Button'
import useTimer from '../../../../globalState/useTimer'

import * as styles from './styles'

export default function TimerControls() {
  const timer = useTimer()

  const stopTimer = () => {
    timer.stopTimer()
    timer.resetTimer()
  }

  return (
    <Box sx={styles.wrapper}>
      {!timer.isPlaying && !timer.isStarted && (
        <Button onClick={timer.startTimer}>Start</Button>
      )}

      {timer.isStarted && (
        <Box sx={styles.innerWrapper}>
          {timer.isStarted && timer.isPlaying && (
            <Button onClick={timer.pauseTimer}>Pause</Button>
          )}

          {timer.isStarted && !timer.isPlaying && (
            <Button onClick={timer.resumeTimer}>Resume</Button>
          )}

          <Button onClick={stopTimer}>Stop</Button>
        </Box>
      )}
    </Box>
  )
}
