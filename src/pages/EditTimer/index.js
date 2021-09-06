import Box from '../../lib/components/Box'
import TextField from '../../lib/components/forms/Textfield'
import NumberSelector from '../../lib/components/forms/NumberSelector'
import useAppBar from '../../lib/components/layouts/ShellLayout/AppBar/useAppBar'

import Controls from './containers/Controls'
import * as styles from './styles'

export default function EditTimerPage() {
  const useAppBarData = useAppBar()

  useEffect(() => {
    useAppBarData.updateTitle('Edit Timer')
  }, [])

  return (
    <Box sx={styles.wrapper}>
      <TextField id='timer-name' placeholder='Name' fullWidth autoComplete='off' />
      <NumberSelector title='Rest' id='rest' isTime />
      <NumberSelector title='Workout' id='workout' isTime />
      <NumberSelector title='Repetitions' id='repetitions' />
      <NumberSelector title='Sets' id='sets' />

      <Controls />
    </Box>
  )
}
