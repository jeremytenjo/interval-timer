import Box from 'lib/components/Box'

import * as styles from './styles.js'
import SoundSettings from './SoundSettings'

export default function SettingsList() {
  return (
    <Box sx={styles.wrapper}>
      <SoundSettings />
    </Box>
  )
}
