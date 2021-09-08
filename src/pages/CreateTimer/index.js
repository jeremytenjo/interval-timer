import Box from '../../lib/components/Box'
import useAppBar from '../../lib/components/layouts/ShellLayout/AppBar/useAppBar'
import TimerEditorCreators from '../../lib/components/TimerEditorCreators'

export default function CreateTimerPage() {
  const appBarData = useAppBar()

  useEffect(() => {
    appBarData.updateTitle('Create Timer')
  }, [])

  return (
    <Box>
      <TimerEditorCreators type='create' />
    </Box>
  )
}
