import React from 'react'
import { useNavigate, useParams } from 'react-router'

import useTimers from '../../../../data/timers/useTimers/useTimers'
import useTimer from '../../../../globalState/useTimer/useTimer'

import EditTimerFormUi from './EditTimerFormUi'

export default function EditTimerForm() {
  const navigate = useNavigate()
  const timers = useTimers({
    onGet: (result) => {
      const timerExists = result.some((timer) => timer.id === params.timerId)

      if (!timerExists) {
        navigate('/')
      }
    },
    onUpdate: (result) => {
      timer.setSelectedTimer(result.updatedItem)
    },
  })
  const timer = useTimer()
  const params = useParams()

  const defaultName = timer?.selectedTimer?.name || ''
  const restDefaultValue = timer?.selectedTimer?.rest * 1000 || 1000
  const workoutDefaultValue = timer?.selectedTimer?.workout * 1000 || 1000
  const repetitionsDefaultValue = timer?.selectedTimer?.repetitions || 1
  const setsDefaultValue = timer?.selectedTimer?.sets || 1

  const onSaveTimer = (payload) => {
    timers.update.exec({ id: timer.selectedTimer.id, value: payload })
  }

  const onRemoveButtonClick = () => {
    if (timer?.selectedTimer?.id) {
      timers.remove.exec({ id: timer?.selectedTimer?.id })
    }
  }

  return (
    <EditTimerFormUi
      defaultName={defaultName}
      onSaveTimer={onSaveTimer}
      restDefaultValue={restDefaultValue}
      workoutDefaultValue={workoutDefaultValue}
      repetitionsDefaultValue={repetitionsDefaultValue}
      setsDefaultValue={setsDefaultValue}
      onRemoveButtonClick={onRemoveButtonClick}
    />
  )
}
