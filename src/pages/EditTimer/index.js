import useOnTrue from '@useweb/use-on-true'

import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useTimers from '../../data/timers/useTimers'
import useTimer from '../../globalState/useTimer'

export default function EditTimerPage() {
  useAppBar({ title: 'Edit Timer' })
  const timers = useTimers()
  const timer = useTimer()

  const defaultName = timer?.selectedTimer?.name || ''
  const restDefaultValue = timer?.selectedTimer?.rest * 1000 || 1000
  const workoutDefaultValue = timer?.selectedTimer?.workout * 1000 || 1000
  const repetitionsDefaultValue = timer?.selectedTimer?.repetitions || 1
  const setsDefaultValue = timer?.selectedTimer?.sets || 1

  useOnTrue(timers.update.result, () => {
    timer.setSelectedTimer(timers.update.result)
  })

  const onSaveTimer = (payload) => {
    timers.update.exec({ id: timer.selectedTimer.id, data: payload })
  }

  const handleRemoveButtonClick = () => {
    if (timer?.selectedTimer?.id) {
      timers.remove.exec({ id: timer?.selectedTimer?.id })
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
