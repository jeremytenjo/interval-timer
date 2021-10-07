import Box from 'lib/components/Box'

import SettingsList from './SettingsList'
import SettingsActionBar from './SettingsActionBar'
import * as styles from './styles.js'

export default function SettingsFormUi() {
  return (
    <Box sx={styles.wrapper}>
      <SettingsList />
      <SettingsActionBar />
    </Box>
  )
}
