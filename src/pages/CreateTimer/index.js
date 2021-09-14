import Box from '../../lib/components/Box'
import useAppBar from '../../lib/components/layouts/ShellLayout/AppBar/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'

export default function CreateTimerPage() {
  const appBarData = useAppBar()

  useEffect(() => {
    appBarData.updateTitle('Create Timer')
  }, [])

  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator type='create' />
    </Box>
  )
}
