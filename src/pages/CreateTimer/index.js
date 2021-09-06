import Box from 'lib/components/Box'
import TextField from 'lib/components/forms/TextField'
import NumberSelector from 'lib/components/forms/NumberSelector'

import Controls from './containers/Controls'
import * as styles from './styles'

export default function CreateTimerPage() {
  return (
    <Box sx={styles.wrapper}>
      <TextField id='timer-name' placeholder='Name' fullWidth autoComplete='off' />
      <NumberSelector title='Rest' id='rest' isTime />
      <NumberSelector title='Workout' id='workout' isTime />
      <NumberSelector title='Repetitions' id='repetitions' />
      <NumberSelector title='Sets' id='sets' />

      <Controls />
    </Box>
  )
}
