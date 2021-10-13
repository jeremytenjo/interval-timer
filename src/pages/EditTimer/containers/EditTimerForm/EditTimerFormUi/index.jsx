import Box from '../../../../../lib/components/Box/index.jsx'

import TimerEditorCreator from '../../../../../lib/components/TimerEditorCreator'

import * as styles from './styles.js'

export default function EditTimerFormUi({
  defaultName,
  onSaveTimer,
  restDefaultValue,
  workoutDefaultValue,
  repetitionsDefaultValue,
  setsDefaultValue,
  handleRemoveButtonClick,
}) {
  return (
    <Box sx={styles.wrapper}>
      <TimerEditorCreator
        key={defaultName}
        onSaveTimer={onSaveTimer}
        defaultName={defaultName}
        restDefaultValue={restDefaultValue}
        workoutDefaultValue={workoutDefaultValue}
        repetitionsDefaultValue={repetitionsDefaultValue}
        setsDefaultValue={setsDefaultValue}
        onRemoveButtonClick={handleRemoveButtonClick}
      />
    </Box>
  )
}
