import create from 'zustand'

import workoutMp3 from '../../../../../public/sounds/workout/1.mp3'

import useVolume from './handlers/useVolume'

const useTimerSoundStore = create((set) => ({
  workoutSoundUrl: workoutMp3,
  setWorkoutSoundUrl: (newValue) => set(() => ({ workoutSoundUrl: newValue })),

  restSoundUrl: workoutMp3,
  setRestSoundUrl: (newValue) => set(() => ({ restSoundUrl: newValue })),
}))

export default function useTimerSound() {
  const timerSoundStore = useTimerSoundStore()
  const volume = useVolume()

  const playSound = (soundUrl) => {
    const audio = new Audio(soundUrl)
    audio.volume = volume.volumeInDecimals
    audio.muted = volume.isMuted

    audio.play()
  }

  const playWorkoutSound = () => {
    playSound(timerSoundStore.workoutSoundUrl)
  }

  const playRestSound = () => {
    playSound(timerSoundStore.restSoundUrl)
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
