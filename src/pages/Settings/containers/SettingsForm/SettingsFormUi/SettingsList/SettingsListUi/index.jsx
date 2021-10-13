import Box from '../../../../../../../lib/components/Box/index.jsx'

import SoundSettings from './SoundSettings'
import * as styles from './styles.js'

export default function SettingsListUi() {
  return (
    <Box sx={styles.wrapper}>
      <SoundSettings />
    </Box>
  )
}
