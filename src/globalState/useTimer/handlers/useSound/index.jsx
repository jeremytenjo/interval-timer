import workoutVoiceMp3 from '/sounds/workout/voice.mp3'
import workoutBeepMp3 from '/sounds/workout/beep.mp3'
import restVoiceMp3 from '/sounds/rest/voice.mp3'
import restBeepMp3 from '/sounds/rest/beep.mp3'

import useSettings from '../../../../data/settings/useSettings/useSettings'

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
    const mp3Url = mp3Urls.workout[settings.currentUserSettings.sound_workoutSound]
    playSound(mp3Url)
  }

  const playRestSound = () => {
    const mp3Url = mp3Urls.rest[settings.currentUserSettings.sound_restSound]
    playSound(mp3Url)
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
