import useSettings from '../../../../../data/settings/useSettings'

import SoundSettingsUi from './SoundSettingsUi'

export default function SoundSettings() {
  const settings = useSettings()
  const setting = 'sound'

  const updateWorkoutSound = (newValue) => {
    settings.updateSetting.exec({
      setting,
      type: 'workout',
      data: newValue,
    })
  }

  const updateRestSound = (newValue) => {
    settings.updateSetting.exec({
      setting,
      type: 'rest',
      data: newValue,
    })
  }

  return (
    <SoundSettingsUi
      onWorkoutSoundSelectionChange={updateWorkoutSound}
      onRestSoundSelectionChange={updateRestSound}
    />
  )
}
