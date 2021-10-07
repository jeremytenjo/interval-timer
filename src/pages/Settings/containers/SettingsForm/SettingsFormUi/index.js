import Box from 'lib/components/Box'

import SettingsList from './SettingsList'
import SettingsActionBar from './SettingsActionBar'
import * as styles from './styles.js'

export default function SettingsFormUi({ onSubmit, handleSubmit }) {
  return (
    <Box sx={styles.wrapper} component='form' onSubmit={handleSubmit(onSubmit)}>
      <SettingsList />
      <SettingsActionBar />
    </Box>
  )
}
