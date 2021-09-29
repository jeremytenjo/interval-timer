import create from 'zustand'

const useTimerSoundStore = create((set) => ({
  volume: 50,
  workoutSoundUrl:
    'https://firebasestorage.googleapis.com/v0/b/my-interval-timer.appspot.com/o/sounds%2Fworkout%2F1.mp3?alt=media&token=65d8f092-0b88-46eb-9cb9-bc9a6e6f1eea',
  restSoundUrl:
    'https://firebasestorage.googleapis.com/v0/b/my-interval-timer.appspot.com/o/sounds%2Fworkout%2F1.mp3?alt=media&token=65d8f092-0b88-46eb-9cb9-bc9a6e6f1eea',
  setVolume: (newValue) => set(() => ({ volume: newValue })),
}))

export default function useTimerSound() {
  const timerSoundStore = useTimerSoundStore()
  const volumeInDecimals = timerSoundStore.volume / 100
  const muted = timerSoundStore.volume === 0

  const playSound = (soundUrl) => {
    const audio = new Audio(soundUrl)
    audio.volume = volumeInDecimals
    audio.muted = muted

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
    updateVolume: timerSoundStore.setVolume,
  }
}
