import VolumeDown from '../../../../../../../../lib/components/icons/VolumeDown'

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
  const defaultValue = 'voice'
  const fields = [
    {
      type: 'radioGroup',
      name: 'sound_workoutSound',
      title: 'Workout Sound',
      defaultValue,
      options,
    },
    {
      type: 'radioGroup',
      name: 'sound_restSound',
      title: 'Rest Sound',
      defaultValue,
      options,
    },
  ]

  return <SoundSettingsUi title='Sound' titleIcon={VolumeDown} fields={fields} />
}
