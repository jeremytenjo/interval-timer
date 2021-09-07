import create from 'zustand'

const useTimersStore = create((set) => ({
  timers: [
    {
      id: 1,
      name: 'Upper Body',
    },
    {
      id: 2,
      name: 'Lower Body',
    },
  ],
  selectedTimer: undefined,

  setTimers: (newTimers) => set(() => ({ timers: newTimers })),
  setSelectedTimer: (newselectedTimer) =>
    set(() => ({ selectedTimer: newselectedTimer })),
}))

export default function useTimers() {
  const useTimerStore = useTimersStore()

  return {
    data: useTimerStore.timers,
    selectedTimer: useTimerStore.selectedTimer || useTimerStore.timers[0],
    setSelectedTimer: useTimerStore.setSelectedTimer,
  }
}
