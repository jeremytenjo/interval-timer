import { useParams } from 'react-router'

import Box from '../Box'
import TextField from '../forms/Textfield'
import NumberSelector from '../forms/NumberSelector'
import MinuteSelector from '../forms/MinuteSelector'

import DeleteTimer from './containers/DeleteTimer'
import * as styles from './styles'
import Controls from './containers/Controls'
import { useState } from 'react'

export default function TimerEditorCreator({
  onSaveTimer = () => null,
  defaultName = null,
  restDefaultValue = 1000,
  workoutDefaultValue = 1000,
  repetitionsDefaultValue = 1,
  setsDefaultValue = 1,
  onRemoveButtonClick,
  saveButtonText,
}) {
  // fields
  const [name, setName] = useState(defaultName)
  const [nameError, setNameError] = useState(null)
  const [rest, setRest] = useState(restDefaultValue / 1000)
  const [workout, setWorkout] = useState(workoutDefaultValue / 1000)
  const [repetitions, setRepetitions] = useState(repetitionsDefaultValue)
  const [sets, setSets] = useState(setsDefaultValue)
  const params = useParams()

  const payload = {
    id: params.timerId,
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
      payload.rest = payload.rest === 0 ? 1 : payload.rest
      payload.workout = payload.workout === 0 ? 1 : payload.workout
      onSaveTimer(payload)
    }
  }

  return (
    <Box sx={styles.wrapper} className='centerPage'>
      <TextField
        id='timer-name'
        placeholder='Name'
        defaultValue={defaultName}
        fullWidth
        autoComplete='off'
        onChange={(data) => updateValue({ id: 'name', data: data.target.value })}
        helperText={nameError ? 'Missing name' : undefined}
        error={nameError}
      />

      <MinuteSelector
        title='Rest'
        id='rest'
        defaultValue={restDefaultValue}
        onChange={(data) => updateValue({ id: 'rest', data })}
      />

      <MinuteSelector
        title='Workout'
        id='workout'
        defaultValue={workoutDefaultValue}
        onChange={(data) => updateValue({ id: 'workout', data })}
      />

      <NumberSelector
        title='Repetitions'
        id='repetitions'
        defaultValue={repetitionsDefaultValue}
        onChange={(data) => updateValue({ id: 'repetitions', data })}
      />

      <NumberSelector
        title='Sets'
        id='sets'
        defaultValue={setsDefaultValue}
        onChange={(data) => updateValue({ id: 'sets', data })}
      />

      {onRemoveButtonClick && <DeleteTimer onDelete={onRemoveButtonClick} />}

      <Controls onSave={onSave} saveButtonText={saveButtonText} />
    </Box>
  )
}
