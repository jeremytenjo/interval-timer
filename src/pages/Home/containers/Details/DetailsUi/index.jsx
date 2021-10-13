import * as styles from './styles'
import Row from './Row'
import Item from './Item'

export default function DetailsUi({
  repetitions,
  sets,
  isStarted,
  remainingTime,
  totalTime,
}) {
  return (
    <>
      <Row sx={styles.upperRow}>
        <Item title='Repetitions' time={repetitions} />
        <Item title='Sets' time={sets} sx={{ textAlign: 'right' }} />
      </Row>

      <Row sx={styles.bottomRow}>
        <Item
          title='Remaining'
          time={isStarted ? remainingTime : totalTime}
          sx={{ ...styles.bottomItemsCss }}
        />

        <Item
          title='Total'
          time={totalTime}
          sx={{ ...styles.bottomItemsCss, textAlign: 'right' }}
        />
      </Row>
    </>
  )
}
