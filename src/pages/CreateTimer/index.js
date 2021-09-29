import { useNavigate } from 'react-router'

import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useTimers from '../../data/timers/useTimers'
import useTimer from '../../globalState/useTimer'

export default function CreateTimerPage() {
  const appBarData = useAppBar()
  const timers = useTimers()
  const timer = useTimer()
  const navigate = useNavigate()

  useEffect(() => {
    appBarData.updateTitle('Create Timer')
  }, [])

  const onSaveTimer = (payload) => {
    timers.addTimer.exec(payload)
  }

  const onStartTimer = (payload) => {
    navigate(`/timer/unsaved`)
    timer.startTimer(payload)
  }

  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator onSaveTimer={onSaveTimer} onStartTimer={onStartTimer} />
    </Box>
  )
}
