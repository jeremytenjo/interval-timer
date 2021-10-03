export default function useSoundsSettings() {
  const onVoiceWorkoutSoundSelected = () => {}
  const onToneWorkoutSoundSelected = () => {}
  const onVoiceRestSoundSelected = () => {}
  const onToneRestSoundSelected = () => {}

  return {
    onVoiceWorkoutSoundSelected,
    onToneWorkoutSoundSelected,
    onVoiceRestSoundSelected,
    onToneRestSoundSelected,
  }
}
