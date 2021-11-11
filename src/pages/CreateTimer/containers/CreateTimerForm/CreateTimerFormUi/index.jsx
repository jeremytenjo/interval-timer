import Box from '../../../../../lib/components/Box/index.jsx'
import TimerEditorCreator from '../../../../../lib/components/TimerEditorCreator'
import Text from '../../../../../lib/components/Text'

import * as styles from './styles.ts'

export default function CreateTimerFormUi({ onSaveTimer, header }) {
  return (
    <Box sx={styles.wrapper}>
      {header && <Text text={header} sx={styles.header} variant={'h6'} as='h2' />}
      <TimerEditorCreator onSaveTimer={onSaveTimer} />
    </Box>
  )
}
