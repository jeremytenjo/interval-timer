import VolumeDown from '../../../../../../../../lib/components/icons/VolumeDown'
import defaultSettings from '../../../../../../../../data/settings/useSettings/defaultSettings'

import SoundSettingsUi from './SoundSettingsUi'

export default function SoundSettings() {
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
      defaultValue: defaultSettings.sound_workoutSound,
      options,
    },
    {
      type: 'radioGroup',
      name: 'sound_restSound',
      title: 'Rest Sound',
      defaultValue: defaultSettings.sound_restSound,
      options,
    },
  ]

  return <SoundSettingsUi title='Sound' titleIcon={VolumeDown} fields={fields} />
}
