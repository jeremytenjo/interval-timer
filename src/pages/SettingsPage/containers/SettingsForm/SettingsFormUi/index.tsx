import React from 'react'
import { useFormContext } from 'react-hook-form'

import Box from '../../../../../lib/components/Box/index.jsx'

import SettingsList from './SettingsList'
import SettingsActionBar from './SettingsActionBar'
import * as styles from './styles'

export default function SettingsFormUi({ onSubmit }) {
  const methods = useFormContext()

  return (
    <Box sx={styles.wrapper} component='form' onSubmit={methods.handleSubmit(onSubmit)}>
      <SettingsList />
      <SettingsActionBar />
    </Box>
  )
}
