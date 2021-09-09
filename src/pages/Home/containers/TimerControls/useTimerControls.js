import create from 'zustand'

const useTimerControls = create((set) => ({
  isPlaying: false,
  isStarted: false,
  timerKey: 1,

  startTimer: () => set(() => ({ isPlaying: true, isStarted: true })),
  pauseTimer: () => set(() => ({ isPlaying: false })),
  resumeTimer: () => set(() => ({ isPlaying: true })),
  stopTimer: () =>
    set((state) => ({
      isPlaying: false,
      isStarted: false,
      timerKey: state.timerKey + 1,
    })),
  restartTimer: () =>
    set((state) => {
      state.startTimer()
      return { timerKey: state.timerKey + 1 }
    }),
}))

export default useTimerControls
