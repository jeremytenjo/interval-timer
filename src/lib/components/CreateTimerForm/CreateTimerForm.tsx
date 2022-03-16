import React from 'react'

import useTimers from '../../../data/timers/useTimers/useTimers'
import useTimer from '../../../globalState/useTimer/useTimer'

import CreateTimerFormUi from './CreateTimerFormUi/CreateTimerFormUi'

type Props = {
  header?: string
}

export default function CreateTimerForm({ header }: Props) {
  const timer = useTimer()
  const timers = useTimers({
    onCreate: (result) => {
      timer.setSelectedTimer(result.createdItem)
    },
  })

  const onSaveTimer = (payload) => {
    timers.create.exec({ value: payload })
  }

  return <CreateTimerFormUi onSaveTimer={onSaveTimer} header={header} />
}
