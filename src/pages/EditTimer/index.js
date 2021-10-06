import useOnTrue from '@useweb/use-on-true'

import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useTimers from '../../data/timers/useTimers'
import useSelectedTimer from '../../globalState/useSelectedTimer'

export default function EditTimerPage() {
  useAppBar({ title: 'Edit Timer' })
  const timers = useTimers()
  const selectedTimer = useSelectedTimer()

  const defaultName = selectedTimer?.selectedTimer?.name || ''
  const restDefaultValue = selectedTimer?.selectedTimer?.rest * 1000 || 1000
  const workoutDefaultValue = selectedTimer?.selectedTimer?.workout * 1000 || 1000
  const repetitionsDefaultValue = selectedTimer?.selectedTimer?.repetitions || 1
  const setsDefaultValue = selectedTimer?.selectedTimer?.sets || 1

  useOnTrue(timers.updateTimer.result, () => {
    selectedTimer.setSelectedTimer(timers.updateTimer.result)
  })

  const onSaveTimer = (payload) => {
    timers.updateTimer.exec({ id: selectedTimer.selectedTimer.id, data: payload })
  }

  const handleRemoveButtonClick = () => {
    if (selectedTimer?.selectedTimer?.id) {
      timers.removeTimer.exec({ id: selectedTimer?.selectedTimer?.id })
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
