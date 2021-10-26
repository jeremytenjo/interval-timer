import { useEffect, useRef } from 'react'

import CountdownCircleTimer from '../../../../../lib/components/CountdownCircleTimer'
import Box from '../../../../../lib/components/Box'

import Info from './Info'
import * as styles from './styles'

/**
 * [Docs](https://github.com/vydimitrov/react-countdown-circle-timer#props-for-both-reactreact-native)
 */
export default function Timer({
  isStarted,
  isPlaying,
  timerKey,
  duration,
  color,
  onTimerComplete,
  restTime,
  workoutTime,
  type,
  onElapsedTimeUpdate,
}) {
  const elapsedTime = useRef(0)
  const currentRemainingTime = useRef(0)

  useEffect(() => {
    if (!isStarted) {
      elapsedTime.current = 0
    }
  }, [isStarted])

  const updateElapsedTime = (newRemainingTiming) => {
    if (isStarted) {
      if (currentRemainingTime.current !== newRemainingTiming) {
        elapsedTime.current = elapsedTime.current + 1
        onElapsedTimeUpdate(elapsedTime.current)
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
        isPlaying={isPlaying}
        key={timerKey}
        duration={duration}
        colors={color}
        onComplete={onTimerComplete}
      >
        {({ remainingTime }) => {
          updateElapsedTime(remainingTime)

          return (
            <Box sx={styles.innerWrapper}>
              <Box sx={styles.infoTop}>
                <Info title='Rest' time={restTime} />
                <Info title='Workout' time={workoutTime} />
              </Box>

              <Info
                title={type}
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
