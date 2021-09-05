import CountdownCircleTimer from '../../../../lib/components/CountdownCircleTimer'
import Box from '../../../../lib/components/Box'

export default function Timer() {
  return (
    <Box
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
        isPlaying
        size={320}
        duration={10}
        strokeLinecap='square'
        colors={'#36B273'}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Box>
  )
}
