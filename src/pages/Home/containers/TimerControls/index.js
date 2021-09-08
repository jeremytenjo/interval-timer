import Box from '../../../../lib/components/Box'
import Button from '../../../../lib/components/Button'

import * as styles from './styles'
import useTimeControls from './useTimeControls'

export default function TimerControls() {
  const timeControls = useTimeControls()

  const onStartClick = () => {
    timeControls.setIsPlaying(true)
    timeControls.setIsStarted(true)
  }

  const onPauseClick = () => {
    timeControls.setIsPlaying(false)
  }
  const onResumeClick = () => {
    timeControls.setIsPlaying(true)
  }

  const onStopClick = () => {
    timeControls.setIsPlaying(false)
    timeControls.setIsStarted(false)
    timeControls.setTimerKey()
  }

  return (
    <Box sx={styles.wrapper}>
      {!timeControls.isPlaying && !timeControls.isStarted && (
        <Button onClick={onStartClick}>Start</Button>
      )}

      {timeControls.isStarted && (
        <Box sx={styles.innerWrapper}>
          {timeControls.isStarted && timeControls.isPlaying && (
            <Button onClick={onPauseClick}>Pause</Button>
          )}

          {timeControls.isStarted && !timeControls.isPlaying && (
            <Button onClick={onResumeClick}>Resume</Button>
          )}

          <Button onClick={onStopClick}>Stop</Button>
        </Box>
      )}
    </Box>
  )
}
