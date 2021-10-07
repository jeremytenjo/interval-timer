import Box from 'lib/components/Box'

import TimerEditorCreator from '../../../../../lib/components/TimerEditorCreator'

import * as styles from './styles.js'

export default function CreateTimerFormUi({ onSaveTimer }) {
  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator onSaveTimer={onSaveTimer} />
    </Box>
  )
}
