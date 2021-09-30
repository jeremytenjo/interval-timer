import create from 'zustand'

import useVolume from './handlers/useVolume'

const useTimerSoundStore = create((set) => ({
  workoutSoundUrl:
    'https://firebasestorage.googleapis.com/v0/b/my-interval-timer.appspot.com/o/sounds%2Fworkout%2F1.mp3?alt=media&token=65d8f092-0b88-46eb-9cb9-bc9a6e6f1eea',
  restSoundUrl:
    'https://firebasestorage.googleapis.com/v0/b/my-interval-timer.appspot.com/o/sounds%2Fworkout%2F1.mp3?alt=media&token=65d8f092-0b88-46eb-9cb9-bc9a6e6f1eea',
  setWorkoutSoundUrl: (newValue) => set(() => ({ workoutSoundUrl: newValue })),
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
  }
}
