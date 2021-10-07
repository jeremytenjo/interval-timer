import useAppBar from '../../globalState/useAppBar'
import Box from '../../lib/components/Box'

import SettingsForm from './containers/SettingsForm'

export default function SettingsPage() {
  useAppBar({ title: 'Settings' })

  return (
    <Box className='centerPage'>
      <SettingsForm />
    </Box>
  )
}
