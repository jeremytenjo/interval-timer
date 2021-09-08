import Box from '../../lib/components/Box'
import useAppBar from '../../lib/components/layouts/ShellLayout/AppBar/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'

export default function CreateTimerPage() {
  const appBarData = useAppBar()

  useEffect(() => {
    appBarData.updateTitle('Create Timer')
  }, [])

  return (
    <Box>
      <TimerEditorCreator type='create' />
    </Box>
  )
}
