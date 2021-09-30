import { useNavigate } from 'react-router'

import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useTimers from '../../data/timers/useTimers'
import useTimer from '../../globalState/useTimer'

export default function CreateTimerPage() {
  useAppBar({ title: 'Create Timer' })
  const timers = useTimers()
  const timer = useTimer()
  const navigate = useNavigate()

  const onSaveTimer = (payload) => {
    timers.addTimer.exec(payload)
  }

  const onStartTimer = (payload) => {
    timers.updateSelectedTimer(payload)
    timer.startTimer(payload)
    navigate(`/`)
  }

  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator onSaveTimer={onSaveTimer} onStartTimer={onStartTimer} />
    </Box>
  )
}
