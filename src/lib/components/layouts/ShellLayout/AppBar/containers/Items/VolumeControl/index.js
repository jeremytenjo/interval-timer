import useTimerSound from '../../../../../../../../globalState/useTimerSound'

import VolumeControlUi from './ui'

export default function VolumeControl() {
  const timerSound = useTimerSound()

  const updateVolume = (newValue) => {
    timerSound.updateVolume(newValue)
  }

  const mute = () => {
    timerSound.updateVolume(0)
  }

  const setToMaxVolume = () => {
    timerSound.updateVolume(100)
  }

  return (
    <VolumeControlUi
      onVolumeChange={updateVolume}
      onMute={mute}
      onSetToMaxVolume={setToMaxVolume}
    />
  )
}
