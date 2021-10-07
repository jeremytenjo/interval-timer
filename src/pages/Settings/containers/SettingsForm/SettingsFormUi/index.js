import Box from 'lib/components/Box'
import { useFormContext } from 'react-hook-form'

import SettingsList from './SettingsList'
import SettingsActionBar from './SettingsActionBar'
import * as styles from './styles.js'

export default function SettingsFormUi({ onSubmit }) {
  const methods = useFormContext()

  return (
    <Box sx={styles.wrapper} component='form' onSubmit={methods.handleSubmit(onSubmit)}>
      <SettingsList />
      <SettingsActionBar />
    </Box>
  )
}
