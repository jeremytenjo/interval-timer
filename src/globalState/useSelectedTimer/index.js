import create from 'zustand'

import useTimers from '../../data/timers/useTimers'

import useUpdateSelectedTimer from './handlers/useUpdateSelectedTimer'

const useSelectedTimerStore = create((set) => ({
  selectedTimer: false,
  setSelectedTimer: (newValue) => set(() => ({ selectedTimer: newValue })),
}))

export default function useSelectedTimer() {
  const selectedTimerStore = useSelectedTimerStore()
  // const timers = useTimers()

  const handlerPayload = {
    // localTimers: timers.data,
    localTimers: [],
    selectedTimer: selectedTimerStore.selectedTimer,
    setSelectedTimer: selectedTimerStore.setSelectedTimer,
  }

  useUpdateSelectedTimer(handlerPayload)

  const setSelectedTimer = (newValue) => {
    selectedTimerStore.setSelectedTimer(newValue)
  }

  return {
    selectedTimer: selectedTimerStore.selectedTimer,
    setSelectedTimer,
  }
}
