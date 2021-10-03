import useAppBar from '../../globalState/useAppBar'
import Box from '../../lib/components/Box'

import SettingsList from './containers/SettingsList'

export default function SettingsPage() {
  useAppBar({ title: 'Settings' })

  return (
    <Box className='centerPage'>
      <SettingsList />
    </Box>
  )
}
