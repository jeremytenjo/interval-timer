import useTimer from '../../../../../../../../globalState/useTimer'

import VolumeControlUi from './ui'

export default function VolumeControl() {
  const timer = useTimer()

  const updateVolume = (newValue) => {
    timer.volume.updateVolume(newValue)
  }

  const mute = () => {
    timer.volume.updateVolume(0)
  }

  const setToMaxVolume = () => {
    timer.volume.updateVolume(100)
  }

  return (
    <VolumeControlUi
      onVolumeChange={updateVolume}
      onMute={mute}
      onSetToMaxVolume={setToMaxVolume}
      isMuted={timer.volume.isMuted}
      defaultValue={timer.volume.volume}
      updateVolume={timer.volume.updateVolume}
    />
  )
}
