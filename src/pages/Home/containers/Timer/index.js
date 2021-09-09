import CountdownCircleTimer from '../../../../lib/components/CountdownCircleTimer'
import Box from '../../../../lib/components/Box'
import useTimers from '../../../../data/timers/useTimers'
import useTimerControls from '../TimerControls/useTimerControls'

import Info from './Info'
import useTimer from './useTimer'
import * as styles from './styles'

/**
 * {@link https://github.com/vydimitrov/react-countdown-circle-timer#props-for-both-reactreact-native|docs}
 */
export default function Timer() {
  const timers = useTimers()
  const timeControls = useTimerControls()
  const timer = useTimer({
    initialRepetitions: timers.selectedTimer.repetitions,
    initialSets: timers.selectedTimer.sets,
    initialWorkoutTime: timers.selectedTimer.workout,
    initialRestTime: timers.selectedTimer.rest,
  })

  return (
    <Box component='section' sx={styles.wrapper}>
      <CountdownCircleTimer
        isPlaying={timeControls.isPlaying}
        key={timeControls.timerKey}
        size={320}
        duration={50}
        strokeLinecap='square'
        colors={'#36B273'}
        onComplete={timer.startNextRepetition}
      >
        {({ remainingTime }) => {
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
