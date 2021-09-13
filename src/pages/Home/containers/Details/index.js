import useTimer from '../Timer/useTimer'
import useTimerControls from '../TimerControls/useTimerControls'

import * as styles from './styles'
import Row from './Row'
import Item from './Item'

export default function Details() {
  const timer = useTimer()
  const timerControls = useTimerControls()

  return (
    <>
      <Row sx={styles.upperRow}>
        <Item title='Repetitions' time={timer.repetitions} />
        <Item title='Sets' time={timer.sets} sx={{ textAlign: 'right' }} />
      </Row>

      <Row sx={styles.bottomRow}>
        <Item
          title='Remaining'
          time={timerControls.isStarted ? timer.remainingTime : timer.totalTime}
          sx={{ ...styles.bottomItemsCss }}
        />

        <Item
          title='Total'
          time={timer.totalTime}
          sx={{ ...styles.bottomItemsCss, textAlign: 'right' }}
        />
      </Row>
    </>
  )
}
