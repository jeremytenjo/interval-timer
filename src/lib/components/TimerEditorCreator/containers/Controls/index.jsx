import React from 'react'

import BottomBar from '../../../BottomBar/BottomBar'
import Button from '../../../Button/Button'

export default function Controls({ onSave, saveButtonText = 'Save' }) {
  return (
    <BottomBar>
      <Button onClick={onSave} data-id='editTimerSaveButton'>
        {saveButtonText}
      </Button>
    </BottomBar>
  )
}
