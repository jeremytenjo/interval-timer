import create from 'zustand'

import useAuth from '../../../globalState/useAuth'
import useLocalStorage from '../../../lib/utils/storage/useLocalStorage'
import useTimer from '../../../globalState/useTimer'

import useGetTimers from './handlers/useGetTimers'
import useCreateTimer from './handlers/useCreateTimer'
import useUpdateTimer from './handlers/useUpdateTimer'
import useRemoveTimer from './handlers/useRemoveTimer'

export const useTimersStore = create((set) => ({
  timers: [],
  setTimers: (newValue) => set(() => ({ timers: newValue })),
}))

export default function useTimers() {
  const timersStore = useTimersStore()
  const timer = useTimer()
  const auth = useAuth()
  const setLocalStorage = useLocalStorage({ action: 'set' })

  const updateLocalTimers = (updatedTimers) => {
    setLocalStorage.exec({ key: 'timers', value: updatedTimers })
    timersStore.setTimers(updatedTimers)
  }

  const handlerPayload = {
    userId: auth?.user?.uid,
    localTimers: timersStore.timers,
    updateLocalTimers,
    selectedTimer: timer.selectedTimer,
  }

  useGetTimers(handlerPayload)
  const createTimer = useCreateTimer(handlerPayload)
  const updateTimer = useUpdateTimer(handlerPayload)
  const removeTimer = useRemoveTimer(handlerPayload)

  return {
    data: timersStore.timers,
    updateTimer,
    removeTimer,
    createTimer,
  }
}
