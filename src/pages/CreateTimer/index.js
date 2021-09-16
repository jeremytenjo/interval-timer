import Box from '../../lib/components/Box'
import useAppBar from '../../lib/components/layouts/ShellLayout/AppBar/useAppBar'
import useSnackBar from '../../lib/components/Snackbar/useSnackbar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'

export default function CreateTimerPage() {
  const appBarData = useAppBar()
  const snackbar = useSnackBar()

  useEffect(() => {
    appBarData.updateTitle('Create Timer')
  }, [])

  const onSaveTimer = () => {
    snackbar.show({ message: 'Timer Saved' })
  }

  const onStartTimer = () => {
    console.log('start timer')
  }

  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator
        type='create'
        onSaveTimer={onSaveTimer}
        onStartTimer={onStartTimer}
      />
    </Box>
  )
}
