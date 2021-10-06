import useOnTrue from '@useweb/use-on-true'

import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useTimers from '../../data/timers/useTimers'
import useTimer from '../../globalState/useTimer'

export default function CreateTimerPage() {
  useAppBar({ title: 'Create Timer' })
  const timers = useTimers()
  const timer = useTimer()

  const onSaveTimer = (payload) => {
    timers.createTimer.exec(payload)
  }

  useOnTrue(timers.createTimer.result, () => {
    timer.setSelectedTimer(timers.createTimer.result)
  })

  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator onSaveTimer={onSaveTimer} />
    </Box>
  )
}
