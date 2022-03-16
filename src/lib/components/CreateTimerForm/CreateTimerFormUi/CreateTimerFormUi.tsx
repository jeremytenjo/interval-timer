import React from 'react'

import Box from '../../Box/Box.jsx'
import TimerEditorCreator from '../../TimerEditorCreator/TimerEditorCreator'
import Text from '../../Text/Text'

import * as styles from './styles'

type Props = {
  onSaveTimer?: (payload: any) => void
  header?: string
}

export default function CreateTimerFormUi({ onSaveTimer, header }: Props) {
  return (
    <Box sx={styles.wrapper} data-id='CreateTimerForm'>
      {header && <Text text={header} sx={styles.header} variant={'h6'} as='h2' />}
      <TimerEditorCreator onSaveTimer={onSaveTimer} />
    </Box>
  )
}
