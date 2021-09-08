import VolumeControlUi from './ui'

// hanlde phone volume
export default function VolumeControl() {
  const updateVolume = (newValue) => {}

  const mute = () => {}

  const setToMaxVolume = () => {}

  return (
    <VolumeControlUi
      onVolumeChange={updateVolume}
      onMute={mute}
      onSetToMaxVolume={setToMaxVolume}
    />
  )
}
