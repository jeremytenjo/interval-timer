import CountdownCircleTimer from '../../../../lib/components/CountdownCircleTimer'
import Box from '../../../../lib/components/Box'

const Info = ({ time, title, sx = {}, titleSx = {}, timeSx = {} }) => {
  return (
    <Box sx={{ textAlign: 'center', ...sx }}>
      <Box
        component='p'
        sx={{ color: 'grey.light', fontSize: 23, lineHeight: 1, ...timeSx }}
      >
        {time}
      </Box>

      <Box
        component='p'
        sx={{
          color: 'grey.light',
          fontSize: '14px',
          textDecoration: 'uppercase',
          ...titleSx,
        }}
      >
        {title}
      </Box>
    </Box>
  )
}

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
        {/* {({ remainingTime }) => remainingTime} */}
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
            <Info title='Rest' time='00:50' />
            <Info title='Workout' time='00:50' />
          </Box>

          <Info
            title='Rest'
            time='00:50'
            sx={{ transform: 'translateY(20px)' }}
            timeSx={{ fontSize: '70px', color: 'white' }}
          />
        </Box>
      </CountdownCircleTimer>
    </Box>
  )
}
