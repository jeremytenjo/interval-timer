import create from 'zustand'

const useTimeControls = create((set) => ({
  isPlaying: false,
  isStarted: false,
  timerKey: 1,

  setIsPlaying: (newValue) => set(() => ({ isPlaying: newValue })),
  setIsStarted: (newValue) => set(() => ({ isStarted: newValue })),
  setTimerKey: () => set((state) => ({ timerKey: state.timerKey + 1 })),
}))

export default useTimeControls
