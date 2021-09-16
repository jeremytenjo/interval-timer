import Box from '../Box'
import TextField from '../forms/Textfield'
import NumberSelector from '../forms/NumberSelector'
import MinuteSelector from '../forms/MinuteSelector'

import * as styles from './styles'
import Controls from './containers/Controls'

export default function TimerEditorCreator({
  type = 'edit',
  onStartTimer = () => null,
  onSaveTimer = () => null,
}) {
  // fields
  const [name, setName] = useState(null)
  const [nameError, setNameError] = useState(null)
  const [rest, setRest] = useState(1)
  const [workout, setWorkout] = useState(1)
  const [repetitions, setRepetitions] = useState(1)
  const [sets, setSets] = useState(1)

  const payload = {
    name,
    rest,
    workout,
    repetitions,
    sets,
  }

  const totalSeconds = ({ minutes, seconds }) => {
    const total = minutes * 60 + seconds
    return total
  }

  const updateValue = ({ data, id }) => {
    if (id === 'name') {
      setName(data)

      if (data) {
        setNameError(false)
      }
    }

    if (id === 'rest') {
      const restSeconds = totalSeconds({ minutes: data.minutes, seconds: data.seconds })

      setRest(restSeconds)
    }

    if (id === 'workout') {
      const workoutSeconds = totalSeconds({
        minutes: data.minutes,
        seconds: data.seconds,
      })

      setWorkout(workoutSeconds)
    }

    if (id === 'repetitions') {
      setRepetitions(data)
    }

    if (id === 'sets') {
      setSets(data)
    }
  }

  const validate = () => {
    let valid = false
    const hasName = payload.name

    if (hasName) {
      valid = true
    } else {
      setNameError(true)
    }

    return valid
  }

  const onSave = () => {
    const isValid = validate()

    if (isValid) {
      onSaveTimer(payload)
    }
  }

  const onStart = () => {
    console.log(payload)
    onStartTimer(payload)
  }

  return (
    <Box sx={styles.wrapper}>
      <TextField
        id='timer-name'
        placeholder='Name'
        fullWidth
        autoComplete='off'
        onChange={(data) => updateValue({ id: 'name', data: data.target.value })}
        helperText={nameError ? 'Missing name' : undefined}
        error={nameError}
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
