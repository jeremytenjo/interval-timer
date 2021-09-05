import Box from '../../../../lib/components/Box'
import Button from '../../../../lib/components/Button'

export default function TimerControls() {
  const started = false

  return (
    <Box
      sx={{
        height: '70px',
        background: 'rgba(0, 0, 0, 0.27)',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      {!started && <Button>Start</Button>}

      {started && (
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridGap: 30,
          }}
        >
          <Button>Pause</Button>
          <Button>Stop</Button>
        </Box>
      )}
    </Box>
  )
}
