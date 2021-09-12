import CountdownCircleTimer from '../../../../lib/components/CountdownCircleTimer'
import Box from '../../../../lib/components/Box'
import useTimerControls from '../TimerControls/useTimerControls'

import Info from './Info'
import useTimer from './useTimer'
import * as styles from './styles'

/**
 * {@link https://github.com/vydimitrov/react-countdown-circle-timer#props-for-both-reactreact-native|docs}
 */
export default function Timer() {
  const timeControls = useTimerControls()
  const timer = useTimer()
  const elapsedTime = useRef(0)
  const currentRemainingTime = useRef(0)

  const updateElapsedTime = (newRemainingTiming) => {
    if (timeControls.isStarted) {
      if (currentRemainingTime.current !== newRemainingTiming) {
        elapsedTime.current = elapsedTime.current + 1
        console.log(elapsedTime.current)
      }
      currentRemainingTime.current = newRemainingTiming
    }
  }

  return (
    <Box component='section' sx={styles.wrapper}>
      <CountdownCircleTimer
        size={320}
        strokeLinecap='square'
        isPlaying={timeControls.isPlaying}
        key={timeControls.timerKey}
        duration={timer.duration}
        colors={timer.color}
        onComplete={timer.startNextRepetition}
      >
        {({ remainingTime }) => {
          updateElapsedTime(remainingTime)

          return (
            <Box sx={styles.innerWrapper}>
              <Box sx={styles.infoTop}>
                <Info title='Rest' time={timer.restTime} />
                <Info title='Workout' time={timer.workoutTime} />
              </Box>

              <Info
                title={timer.type}
                time={remainingTime}
                sx={styles.infoBottom.wrapper}
                timeSx={styles.infoBottom.time}
              />
            </Box>
          )
        }}
      </CountdownCircleTimer>
    </Box>
  )
}
