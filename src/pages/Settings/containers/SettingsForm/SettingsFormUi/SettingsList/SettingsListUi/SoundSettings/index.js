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
      name: 'workoutSound',
      title: 'Workout Sound',
      defaultValue,
      options,
    },
    {
      type: 'radioGroup',
      name: 'restSound',
      title: 'Rest Sound',
      defaultValue,
      options,
    },
  ]

  return <SoundSettingsUi title='Sound' fields={fields} />
}
