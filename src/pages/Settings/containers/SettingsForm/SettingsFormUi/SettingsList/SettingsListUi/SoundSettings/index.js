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
  const groups = [
    {
      name: 'workoutSound',
      title: 'Workout Sound',
      defaultValue,
      options,
    },
    {
      name: 'restSound',
      title: 'Rest Sound',
      defaultValue,
      options,
    },
  ]

  return <SoundSettingsUi title='Sound' groups={groups} />
}
