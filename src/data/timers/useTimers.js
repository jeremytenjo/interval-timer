import create from 'zustand'

import useAuth from '../../globalState/useAuth'

import useGetTimers from './handlers/useGetTimers'
import useAddTimer from './handlers/useAddTimer'
import useUpdateTimer from './handlers/useUpdateTimer'
import useRemoveTimer from './handlers/useRemoveTimer'
import useUpdateSelectedTimer from './handlers/useUpdateSelectedTimer'

const useTimersStore = create((set) => ({
  timers: [],
  selectedTimer: undefined,

  setTimers: (newValue) => set(() => ({ timers: newValue })),
  setSelectedTimer: (newValue) => set(() => ({ selectedTimer: newValue })),
}))

export default function useTimers() {
  const timersStore = useTimersStore()
  const auth = useAuth()

  const handlerPayload = {
    userId: auth?.user?.uid,
    localTimers: timersStore.timers,
    updateLocalTimers: timersStore.setTimers,
    selectedTimer: timersStore.selectedTimer,
    setSelectedTimer: timersStore.setSelectedTimer,
  }

  // handlers
  useUpdateSelectedTimer(handlerPayload)
  useGetTimers(handlerPayload)
  const addTimer = useAddTimer(handlerPayload)
  const updateTimer = useUpdateTimer(handlerPayload)
  const removeTimer = useRemoveTimer(handlerPayload)

  return {
    data: timersStore.timers,
    selectedTimer: timersStore.selectedTimer,
    updateTimer,
    removeTimer,
    addTimer,
  }
}
