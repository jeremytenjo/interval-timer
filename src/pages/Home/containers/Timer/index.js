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

  return (
    <Box component='section' sx={styles.wrapper}>
      <CountdownCircleTimer
        isPlaying={timeControls.isPlaying}
        key={timeControls.timerKey}
        size={320}
        duration={timer.duration}
        strokeLinecap='square'
        colors={timer.color}
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
