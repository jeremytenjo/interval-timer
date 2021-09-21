import Box from '../../lib/components/Box'
import useAppBar from '../../globalState/useAppBar'
import useSnackBar from '../../lib/components/Snackbar/useSnackbar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'

export default function CreateTimerPage() {
  const appBarData = useAppBar()
  const snackbar = useSnackBar()

  useEffect(() => {
    appBarData.updateTitle('Create Timer')
  }, [])

  const onSaveTimer = (payload) => {
    console.log(payload)
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
