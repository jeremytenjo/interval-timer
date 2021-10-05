import create from 'zustand'

import useAuth from '../../../globalState/useAuth'
import useLocalStorage from '../../../lib/utils/storage/useLocalStorage'

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

export default function useTimers({ navigateToFetchedTimerOnLoad } = {}) {
  const timersStore = useTimersStore()
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
    selectedTimer: timersStore.selectedTimer,
    setSelectedTimer: timersStore.setSelectedTimer,
    navigateToFetchedTimerOnLoad,
  }

  // handlers
  const updateSelectedTimer = useUpdateSelectedTimer(handlerPayload)
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
    updateSelectedTimer,
  }
}
