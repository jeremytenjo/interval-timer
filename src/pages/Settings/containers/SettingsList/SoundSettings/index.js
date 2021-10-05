import useSettings from '../../../../../data/settings/useSettings'

import SoundSettingsUi from './SoundSettingsUi'

export default function SoundSettings() {
  const settings = useSettings()

  return (
    <SoundSettingsUi
      onWorkoutSoundSelectionChange={settings.udpateWorkoutSoundSelection}
      onRestSoundSelectionChange={settings.updateRestSoundSelection}
    />
  )
}
