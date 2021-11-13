import Box from '../../Box/index.jsx'
import TimerEditorCreator from '../../TimerEditorCreator'
import Text from '../../Text'

import * as styles from './styles'

type Props = {
  onSaveTimer?: (payload: any) => void
  header?: string
}

export default function CreateTimerFormUi({ onSaveTimer, header }: Props) {
  return (
    <Box sx={styles.wrapper}>
      {header && <Text text={header} sx={styles.header} variant={'h6'} as='h2' />}
      <TimerEditorCreator onSaveTimer={onSaveTimer} />
    </Box>
  )
}
