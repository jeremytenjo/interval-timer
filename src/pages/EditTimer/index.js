import { useNavigate } from 'react-router'
import useOnTrue from '@useweb/use-on-true'

import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useTimers from '../../data/timers/useTimers'

export default function EditTimerPage() {
  useAppBar({ title: 'Edit Timer' })
  const timers = useTimers()
  const navigate = useNavigate()

  const defaultName = timers?.selectedTimer?.name || ''
  const restDefaultValue = timers?.selectedTimer?.rest * 1000 || 1000
  const workoutDefaultValue = timers?.selectedTimer?.workout * 1000 || 1000
  const repetitionsDefaultValue = timers?.selectedTimer?.repetitions || 1
  const setsDefaultValue = timers?.selectedTimer?.sets || 1

  useOnTrue(timers.updateTimer.result, () => {
    navigate(`/timer/${timers.updateTimer.result.id}`)
  })

  const onSaveTimer = (payload) => {
    timers.updateTimer.exec({ id: timers.selectedTimer.id, data: payload })
  }

  const handleRemoveButtonClick = () => {
    if (timers?.selectedTimer?.id) {
      timers.removeTimer.exec({ id: timers?.selectedTimer?.id })
    }
  }

  return (
    <Box sx={{ paddingBottom: '80px' }}>
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
