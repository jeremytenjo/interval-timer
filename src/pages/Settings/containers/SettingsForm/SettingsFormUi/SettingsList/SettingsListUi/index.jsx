import Box from '../../../../../../../lib/components/Box/index.jsx'

import SoundSettings from './SoundSettings'
import * as styles from './styles.ts'

export default function SettingsListUi() {
  return (
    <Box sx={styles.wrapper}>
      <SoundSettings />
    </Box>
  )
}
