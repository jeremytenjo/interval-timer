import useTimers from '../../../../data/timers/useTimers'

import Row from './Row'
import Item from './Item'

const bottomItemsCss = {
  display: 'flex',
  flexDirection: 'column-reverse',
}

export default function Details() {
  const timers = useTimers()

  return (
    <>
      <Row sx={{ marginTop: '12px' }}>
        <Item title='Repetitions' time={timers.selectedTimer.repetitions} />
        <Item title='Sets' time={timers.selectedTimer.sets} sx={{ textAlign: 'right' }} />
      </Row>

      <Row
        sx={{
          position: 'fixed',
          bottom: '80px',
          left: 0,
          right: 0,
        }}
      >
        <Item title='Remaining' time={60} sx={{ ...bottomItemsCss }} />
        <Item title='Total' time={60} sx={{ ...bottomItemsCss, textAlign: 'right' }} />
      </Row>
    </>
  )
}
