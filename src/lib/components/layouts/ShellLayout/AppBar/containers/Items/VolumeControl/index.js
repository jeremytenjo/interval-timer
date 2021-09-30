import useVolume from '../../../../../../../../globalState/useTimerSound/handlers/useVolume'

import VolumeControlUi from './ui'

export default function VolumeControl() {
  const volume = useVolume()

  const updateVolume = (newValue) => {
    volume.updateVolume(newValue)
  }

  const mute = () => {
    volume.updateVolume(0)
  }

  const setToMaxVolume = () => {
    volume.updateVolume(100)
  }

  return (
    <VolumeControlUi
      onVolumeChange={updateVolume}
      onMute={mute}
      onSetToMaxVolume={setToMaxVolume}
      isMuted={volume.isMuted}
      defaultValue={volume.volume}
      updateVolume={volume.updateVolume}
    />
  )
}
