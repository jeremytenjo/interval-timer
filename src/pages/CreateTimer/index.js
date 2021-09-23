import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import useSnackBar from '../../lib/components/Snackbar/useSnackbar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useTimers from '../../data/timers/useTimers'

export default function CreateTimerPage() {
  const appBarData = useAppBar()
  const snackbar = useSnackBar()
  const timers = useTimers()

  useEffect(() => {
    appBarData.updateTitle('Create Timer')
  }, [])

  const onSaveTimer = (payload) => {
    timers.addTimer.exec(payload)
    snackbar.show({ message: 'Timer Saved' })
  }

  const onStartTimer = (payload) => {
    console.log(payload)
    console.log('start timer')
  }

  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator onSaveTimer={onSaveTimer} onStartTimer={onStartTimer} />
    </Box>
  )
}
