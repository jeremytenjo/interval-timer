import Box from '../../lib/components/Box'
import useAppBar from '../../lib/components/layouts/ShellLayout/AppBar/useAppBar'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'

export default function EditTimerPage() {
  const useAppBarData = useAppBar()

  useEffect(() => {
    useAppBarData.updateTitle('Edit Timer')
  }, [])

  return (
    <Box sx={{ paddingBottom: '80px' }}>
      <TimerEditorCreator type='edit' />
    </Box>
  )
}
