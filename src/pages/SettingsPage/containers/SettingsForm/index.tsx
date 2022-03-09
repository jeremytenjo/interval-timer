import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import useSettings from '../../../../data/settings/useSettings/useSettings'

import SettingsFormUi from './SettingsFormUi'

export default function SettingsForm() {
  const settings = useSettings()
  const methods = useForm()

  const handleSubmission = (submttedData) => {
    const payload = {
      ...settings.currentUserSettings,
      ...submttedData,
    }

    settings.update.exec({
      id: payload.id,
      value: payload,
    })
  }

  return (
    <FormProvider {...methods}>
      <SettingsFormUi onSubmit={handleSubmission} />
    </FormProvider>
  )
}
