import React from 'react'

import VolumeDown from '../../../../../../../../lib/components/icons/VolumeDown'
import useSettings from '../../../../../../../../data/settings/useSettings/useSettings'

import SoundSettingsUi from './SoundSettingsUi/SoundSettingsUi'

export default function SoundSettings() {
  const settings = useSettings()

  const options = [
    {
      value: 'voice',
      label: 'Voice',
    },
    {
      value: 'beep',
      label: 'Beep',
    },
  ]
  const fields = [
    {
      type: 'radioGroup',
      name: 'sound_workoutSound',
      title: 'Workout Sound',
      defaultValue: settings?.currentUserSettings?.sound_workoutSound,
      options,
    },
    {
      type: 'radioGroup',
      name: 'sound_restSound',
      title: 'Rest Sound',
      defaultValue: settings?.currentUserSettings?.sound_restSound,
      options,
    },
  ]

  return settings?.currentUserSettings ? (
    <SoundSettingsUi title='Sound' titleIcon={VolumeDown} fields={fields} />
  ) : null
}
