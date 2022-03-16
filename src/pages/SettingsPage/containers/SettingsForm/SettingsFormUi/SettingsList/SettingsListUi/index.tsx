import React from 'react'

import Box from '../../../../../../../lib/components/Box/index.jsx'

import SoundSettings from './SoundSettings/SoundSettings'
import * as styles from './styles'

export default function SettingsListUi() {
  return (
    <Box sx={styles.wrapper}>
      <SoundSettings />
    </Box>
  )
}
