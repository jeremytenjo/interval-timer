import Box from '../Box'
import TextField from '../forms/Textfield'
import NumberSelector from '../forms/NumberSelector'
import MinuteSelector from '../forms/MinuteSelector'

import * as styles from './styles'
import Controls from './containers/Controls'

export default function TimerEditorCreator({ type = 'edit' }) {
  return (
    <Box sx={styles.wrapper}>
      <TextField id='timer-name' placeholder='Name' fullWidth autoComplete='off' />
      <MinuteSelector title='Rest' id='rest' />
      <MinuteSelector title='Workout' id='workout' />
      <NumberSelector title='Repetitions' id='repetitions' />
      <NumberSelector title='Sets' id='sets' />

      <Controls />
    </Box>
  )
}
