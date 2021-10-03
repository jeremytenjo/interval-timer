import SoundSettingsUi from './SoundSettingsUi'
import useSoundsSettings from './SoundSettingsUi/useSoundsSettings'

export default function SoundSettings() {
  const soundSettings = useSoundsSettings()

  return (
    <SoundSettingsUi
      onVoiceWorkoutSoundSelected={soundSettings.onVoiceWorkoutSoundSelected}
      onToneWorkoutSoundSelected={soundSettings.onToneWorkoutSoundSelected}
      onVoiceRestSoundSelected={soundSettings.onVoiceRestSoundSelected}
      onToneRestSoundSelected={soundSettings.onToneRestSoundSelected}
    />
  )
}
