import workoutBeepMp3 from '../../../../../public/sounds/workout/beep.mp3'
import workoutVoiceMp3 from '../../../../../public/sounds/workout/beep.mp3'
import restBeepMp3 from '../../../../../public/sounds/workout/beep.mp3'
import restVoiceMp3 from '../../../../../public/sounds/workout/beep.mp3'
import useSettings from '../../../../data/settings/useSettings'

import useVolume from './handlers/useVolume'

export default function useTimerSound() {
  const volume = useVolume()
  const settings = useSettings()

  const mp3Urls = {
    workout: {
      voice: workoutVoiceMp3,
      beep: workoutBeepMp3,
    },
    rest: {
      voice: restVoiceMp3,
      beep: restBeepMp3,
    },
  }

  const playSound = (soundUrl) => {
    const audio = new Audio(soundUrl)
    audio.volume = volume.volumeInDecimals
    audio.muted = volume.isMuted

    audio.play()
  }

  const playWorkoutSound = () => {
    console.log(settings.currentUserSettings.sound_workoutSound)

    playSound(mp3Urls.workout[settings.currentUserSettings.sound_workoutSound])
  }

  const playRestSound = () => {
    console.log(settings.currentUserSettings.sound_restSound)
    playSound(mp3Urls.rest[settings.currentUserSettings.sound_restSound])
  }

  return {
    playRestSound,
    playWorkoutSound,
    isMuted: volume.isMuted,
    volumeInDecimals: volume.volumeInDecimals,
    volume: volume.volume,
    updateVolume: volume.updateVolume,
  }
}
