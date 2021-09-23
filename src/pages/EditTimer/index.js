import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useSnackBar from '../../lib/components/Snackbar/useSnackbar'
import useTimers from '../../data/timers/useTimers'

export default function EditTimerPage() {
  const appBarData = useAppBar()
  const snackbar = useSnackBar()
  const timers = useTimers()
  const navigate = useNavigate()

  const defaultName = timers?.selectedTimer?.name || ''
  const restDefaultValue = timers?.selectedTimer?.rest * 1000 || 1000
  const workoutDefaultValue = timers?.selectedTimer?.workout * 1000 || 1000
  const repetitionsDefaultValue = timers?.selectedTimer?.repetitions || 1
  const setsDefaultValue = timers?.selectedTimer?.sets || 1

  useEffect(() => {
    appBarData.updateTitle('Edit Timer')
  }, [])

  const onSaveTimer = (payload) => {
    // TODO make into hook to handle loading, error, etc states
    timers.updateTimer.exec({ id: timers.selectedTimer.id, data: payload })
    snackbar.show({ message: 'Timer Saved' })
  }

  const onStartTimer = (payload) => {
    console.log(payload)
    console.log('start timer')
  }

  const handleRemoveButtonClick = () => {
    // TODO make into hook to handle loading, error, etc states
    timers.removeTimer({ id: timers?.selectedTimer.id })
    snackbar.show({ message: 'Timer Removed' })
    navigate('/')
  }

  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator
        key={defaultName}
        onSaveTimer={onSaveTimer}
        onStartTimer={onStartTimer}
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
