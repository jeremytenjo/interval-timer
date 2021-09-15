import Box from '../Box'
import TextField from '../forms/Textfield'
import NumberSelector from '../forms/NumberSelector'
import MinuteSelector from '../forms/MinuteSelector'
import useSnackBar from '../Snackbar/useSnackbar'

import * as styles from './styles'
import Controls from './containers/Controls'

export default function TimerEditorCreator({ type = 'edit' }) {
  const snackbar = useSnackBar()

  const updateValue = ({ data, id }) => {
    console.log({ data, id })
  }

  const onSave = () => {
    snackbar.show({ message: 'Timer Saved' })
  }

  const onStart = () => {}

  return (
    <Box sx={styles.wrapper}>
      <TextField
        id='timer-name'
        placeholder='Name'
        fullWidth
        autoComplete='off'
        onChange={(data) => updateValue({ id: 'name', data: data.target.value })}
      />

      <MinuteSelector
        title='Rest'
        id='rest'
        onChange={(data) => updateValue({ id: 'rest', data })}
      />

      <MinuteSelector
        title='Workout'
        id='workout'
        onChange={(data) => updateValue({ id: 'workout', data })}
      />

      <NumberSelector
        title='Repetitions'
        id='repetitions'
        onChange={(data) => updateValue({ id: 'repetitions', data })}
      />

      <NumberSelector
        title='Sets'
        id='sets'
        onChange={(data) => updateValue({ id: 'sets', data })}
      />

      <Controls onSave={onSave} onStart={onStart} />
    </Box>
  )
}
