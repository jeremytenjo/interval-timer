import Box from '../../../../../lib/components/Box/index.jsx'
import TimerEditorCreator from '../../../../../lib/components/TimerEditorCreator'

import * as styles from './styles.js'

export default function CreateTimerFormUi({ onSaveTimer }) {
  return (
    <Box sx={styles.wrapper}>
      <TimerEditorCreator onSaveTimer={onSaveTimer} />
    </Box>
  )
}
