import useAppBar from '../../globalState/useAppBar'
import Box from '../../lib/components/Box'

import SettingsList from './containers/SettingsList'
import SettingsActionBar from './containers/SettingsActionBar'

export default function SettingsPage() {
  useAppBar({ title: 'Settings' })

  return (
    <Box className='centerPage'>
      <SettingsList />
      <SettingsActionBar />
    </Box>
  )
}
