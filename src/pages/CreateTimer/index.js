import useOnTrue from '@useweb/use-on-true'

import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useTimers from '../../data/timers/useTimers'
import useSelectedTimer from '../../globalState/useSelectedTimer'

export default function CreateTimerPage() {
  useAppBar({ title: 'Create Timer' })
  const timers = useTimers()
  const selectedTimer = useSelectedTimer()

  const onSaveTimer = (payload) => {
    timers.createTimer.exec(payload)
  }

  useOnTrue(timers.createTimer.result, () => {
    selectedTimer.setSelectedTimer(timers.createTimer.result)
  })

  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator onSaveTimer={onSaveTimer} />
    </Box>
  )
}
