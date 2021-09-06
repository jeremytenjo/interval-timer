import Box from '../../lib/components/Box'
import useAppBar from '../../lib/components/layouts/ShellLayout/AppBar/useAppBar'
import TimerEditorCreator from '../../lib/components/TImerEditorCreator'

export default function CreateTimerPage() {
  const useAppBarData = useAppBar()

  useEffect(() => {
    useAppBarData.updateTitle('Create Timer')
  }, [])

  return (
    <Box>
      <TimerEditorCreator type='create' />
    </Box>
  )
}
