import Box from '../../../../lib/components/Box'
import Button from '../../../../lib/components/Button'
import useTimer from '../Timer/useTimer'

import * as styles from './styles'
import useTimerControls from './useTimerControls'

export default function TimerControls() {
  const timeControls = useTimerControls()
  const timer = useTimer()

  const stopTimer = () => {
    timeControls.stopTimer()
    timer.resetTimer()
  }

  return (
    <Box sx={styles.wrapper}>
      {!timeControls.isPlaying && !timeControls.isStarted && (
        <Button onClick={timeControls.startTimer}>Start</Button>
      )}

      {timeControls.isStarted && (
        <Box sx={styles.innerWrapper}>
          {timeControls.isStarted && timeControls.isPlaying && (
            <Button onClick={timeControls.pauseTimer}>Pause</Button>
          )}

          {timeControls.isStarted && !timeControls.isPlaying && (
            <Button onClick={timeControls.resumeTimer}>Resume</Button>
          )}

          <Button onClick={stopTimer}>Stop</Button>
        </Box>
      )}
    </Box>
  )
}
