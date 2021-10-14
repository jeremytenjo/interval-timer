import useTimer from '../../../../../../../../globalState/useTimer'

import VolumeControlUi from './VolumeControlUi'

export default function VolumeControl() {
  const timer = useTimer()

  const updateVolume = (newValue) => {
    timer.sound.updateVolume(newValue)
  }

  const mute = () => {
    timer.sound.updateVolume(0)
  }

  const setToMaxVolume = () => {
    timer.sound.updateVolume(100)
  }

  return (
    <VolumeControlUi
      onVolumeChange={updateVolume}
      onMute={mute}
      onSetToMaxVolume={setToMaxVolume}
      isMuted={timer.sound.isMuted}
      defaultValue={timer.sound.volume}
      updateVolume={timer.sound.updateVolume}
    />
  )
}
