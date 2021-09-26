import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useTimers from '../../data/timers/useTimers'
import useTimer from '../../globalState/useTimer'

export default function CreateTimerPage() {
  const appBarData = useAppBar()
  const timers = useTimers()
  const timer = useTimer()

  useEffect(() => {
    appBarData.updateTitle('Create Timer')
  }, [])

  const onSaveTimer = (payload) => {
    timers.addTimer.exec(payload)
  }

  const onStartTimer = (payload) => {
    // TODO start timer
    console.log(payload)
    // navigate(`/timer/${payload.id}`)
    timer.startTimer(payload)
  }

  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator onSaveTimer={onSaveTimer} onStartTimer={onStartTimer} />
    </Box>
  )
}
