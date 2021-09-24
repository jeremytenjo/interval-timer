import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'
import useTimers from '../../data/timers/useTimers'

export default function EditTimerPage() {
  const appBarData = useAppBar()
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
    timers.updateTimer.exec({ id: timers.selectedTimer.id, data: payload })
  }

  const onStartTimer = (payload) => {
    console.log(payload)
    console.log('start timer')
  }

  const handleRemoveButtonClick = () => {
    // TODO make into hook to handle loading, error, etc states
    timers.removeTimer({ id: timers?.selectedTimer.id })
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
