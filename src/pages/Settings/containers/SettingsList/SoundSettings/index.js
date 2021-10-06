import useSettings from '../../../../../data/settings/useSettings'

import SoundSettingsUi from './SoundSettingsUi'

export default function SoundSettings() {
  const settings = useSettings()
  const setting = 'sound'

  const updateWorkoutSound = (newValue) => {
    const type = 'workout'
    const id = setting + type
    settings.update.exec({
      id,
      data: {
        setting,
        type,
        data: newValue,
      },
    })
  }

  const updateRestSound = (newValue) => {
    const type = 'rest'
    const id = setting + type
    settings.update.exec({
      id,
      data: {
        setting,
        type,
        data: newValue,
      },
    })
  }

  return (
    <SoundSettingsUi
      onWorkoutSoundSelectionChange={updateWorkoutSound}
      onRestSoundSelectionChange={updateRestSound}
    />
  )
}
