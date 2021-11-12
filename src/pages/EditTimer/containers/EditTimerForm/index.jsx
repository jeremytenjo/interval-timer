import useOnTrue from '@useweb/use-on-true'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

import useTimers from '../../../../data/timers/useTimers'
import useTimer from '../../../../globalState/useTimer'

import EditTimerFormUi from './EditTimerFormUi'

export default function EditTimerForm() {
  const navigate = useNavigate()
  const timers = useTimers()
  const timer = useTimer()
  const params = useParams()

  useEffect(() => {
    if (timers.get.isFetched) {
      const timerExists = timers.get.data.some((timer) => timer.id === params.timerId)
      if (!timerExists) {
        navigate('/')
      }
    }
  }, [timers.get.isFetched, timers.get.data])

  const defaultName = timer?.selectedTimer?.name || ''
  const restDefaultValue = timer?.selectedTimer?.rest * 1000 || 1000
  const workoutDefaultValue = timer?.selectedTimer?.workout * 1000 || 1000
  const repetitionsDefaultValue = timer?.selectedTimer?.repetitions || 1
  const setsDefaultValue = timer?.selectedTimer?.sets || 1

  useOnTrue(timers.update.result, () => {
    timer.setSelectedTimer(timers.update.result.updatedItem)
  })

  const onSaveTimer = (payload) => {
    timers.update.exec({ id: timer.selectedTimer.id, data: payload })
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
