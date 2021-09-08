import Box from '../../lib/components/Box'
import useAppBar from '../../lib/components/layouts/ShellLayout/AppBar/useAppBar'
import TimerEditorCreators from '../../lib/components/TimerEditorCreators'

export default function EditTimerPage() {
  const useAppBarData = useAppBar()

  useEffect(() => {
    useAppBarData.updateTitle('Edit Timer')
  }, [])

  return (
    <Box>
      <TimerEditorCreators type='edit' />
    </Box>
  )
}
