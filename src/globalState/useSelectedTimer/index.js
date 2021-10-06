import create from 'zustand'

const useSelectedTimerStore = create((set) => ({
  selectedTimer: false,
  setSelectedTimer: (newValue) => set(() => ({ selectedTimer: newValue })),
}))

export default function useSelectedTimer() {
  const selectedTimerStore = useSelectedTimerStore()

  const setSelectedTimer = (newValue) => {
    selectedTimerStore.setSelectedTimer(newValue)
  }

  return {
    selectedTimer: selectedTimerStore.selectedTimer,
    setSelectedTimer,
  }
}
