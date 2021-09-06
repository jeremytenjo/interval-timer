import Box from '../Box'
import TextField from '../forms/Textfield'
import NumberSelector from '../forms/NumberSelector'
import * as styles from '../TimerEditorCreator/styles'

import Controls from './containers/Controls'

export default function TimerEditorCreator() {
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
