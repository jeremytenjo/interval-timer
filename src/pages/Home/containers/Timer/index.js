import CountdownCircleTimer from '../../../../lib/components/CountdownCircleTimer'
import Box from '../../../../lib/components/Box'
import useTimers from '../../../../data/timers/useTimers'
import useTimeControls from '../TimerControls/useTimeControls'

import Info from './Info'
/**
 * {@link https://github.com/vydimitrov/react-countdown-circle-timer#props-for-both-reactreact-native|docs}
 */
export default function Timer() {
  const timers = useTimers()
  const timeControls = useTimeControls()

  return (
    <Box
      component='section'
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: 'fit-content',
        height: 'fit-content',
        margin: 0,
        transform: 'translate(-50%, -50%)',
        userSelect: 'none',
      }}
    >
      <CountdownCircleTimer
        isPlaying={timeControls.isPlaying}
        key={timeControls.timerKey}
        size={320}
        duration={50}
        strokeLinecap='square'
        colors={'#36B273'}
      >
        {({ remainingTime }) => {
          return (
            <Box
              sx={{
                width: '100%',
                padding: '60px',
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridAutoFlow: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Info title='Rest' time={timers.selectedTimer.rest} />
                <Info title='Workout' time={timers.selectedTimer.workout} />
              </Box>

              <Info
                title='Rest'
                time={remainingTime}
                sx={{ transform: 'translateY(20px)' }}
                timeSx={{ fontSize: '70px', color: 'white' }}
              />
            </Box>
          )
        }}
      </CountdownCircleTimer>
    </Box>
  )
}
