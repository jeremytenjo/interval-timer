import Box from '../../../../lib/components/Box'
import Button from '../../../../lib/components/Button'
import useTimer from '../Timer/useTimer'

import * as styles from './styles'
import useTimerControls from './useTimerControls'

export default function TimerControls() {
  const timerControls = useTimerControls()
  const timer = useTimer()

  const stopTimer = () => {
    timerControls.stopTimer()
    timer.resetTimer()
  }

  return (
    <Box sx={styles.wrapper}>
      {!timerControls.isPlaying && !timerControls.isStarted && (
        <Button onClick={timerControls.startTimer}>Start</Button>
      )}

      {timerControls.isStarted && (
        <Box sx={styles.innerWrapper}>
          {timerControls.isStarted && timerControls.isPlaying && (
            <Button onClick={timerControls.pauseTimer}>Pause</Button>
          )}

          {timerControls.isStarted && !timerControls.isPlaying && (
            <Button onClick={timerControls.resumeTimer}>Resume</Button>
          )}

          <Button onClick={stopTimer}>Stop</Button>
        </Box>
      )}
    </Box>
  )
}
