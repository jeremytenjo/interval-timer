import React from 'react'

import * as styles from './styles'
import Row from './Row/Row'
import Item from './Item/Item'

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

      {remainingTime && (
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
      )}
    </>
  )
}
