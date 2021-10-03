import SoundSettingsUi from './SoundSettingsUi'

export default function SoundSettings() {
  // TODO add settings, pick wourkout sound, pick rest sound from beep or voice

  return (
    <SoundSettingsUi
      onVoiceWorkoutSoundSelected
      onToneWorkoutSoundSelected
      onVoiceRestSoundSelected
      onToneRestSoundSelected
    />
  )
}
