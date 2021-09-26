import CountdownCircleTimer from '../../../../lib/components/CountdownCircleTimer'
import Box from '../../../../lib/components/Box'
import useTimer from '../../../../globalState/useTimer'

import Info from './Info'
import * as styles from './styles'

/**
 * [Docs](https://github.com/vydimitrov/react-countdown-circle-timer#props-for-both-reactreact-native)
 */
export default function Timer() {
  const timer = useTimer()
  const elapsedTime = useRef(0)
  const currentRemainingTime = useRef(0)

  useEffect(() => {
    if (!timer.isStarted) {
      elapsedTime.current = 0
    }
  }, [timer.isStarted])

  const updateElapsedTime = (newRemainingTiming) => {
    if (timer.isStarted) {
      if (currentRemainingTime.current !== newRemainingTiming) {
        elapsedTime.current = elapsedTime.current + 1
        timer.setElapsedTime(elapsedTime.current)
      }
      currentRemainingTime.current = newRemainingTiming
    } else {
      elapsedTime.current = 0
    }
  }

  return (
    <Box component='section' sx={styles.wrapper}>
      <CountdownCircleTimer
        size={320}
        strokeLinecap='square'
        isPlaying={timer.isPlaying}
        key={timer.timerKey}
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
