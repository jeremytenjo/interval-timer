import Box from '../../lib/components/Box'
import TextField from '../../lib/components/forms/TextField'

export default function CreateTimerPage() {
  return (
    <Box sx={{ padding: '20px', maxWidth: '500px', margin: 'auto', display: 'block' }}>
      <TextField id='timer-name' placeholder='Name' fullWidth />
    </Box>
  )
}
