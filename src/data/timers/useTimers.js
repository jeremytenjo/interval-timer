import create from 'zustand'

import useAuth from '../../globalState/useAuth'

import useGetTimers from './handlers/useGetTimers'
import useAddTimer from './handlers/useAddTimer'
import useUpdateTimer from './handlers/useUpdateTimer'
import useRemoveTimer from './handlers/useRemoveTimer'
import useUpdateSelectedTimer from './handlers/useUpdateSelectedTimer'

const getLocalStorageTimers = () => {
  // TODO get default timers from storage https://capacitorjs.com/docs/apis/storage
  const localStorageTimers = []
  return localStorageTimers
}

const useTimersStore = create((set) => ({
  timers: getLocalStorageTimers(),
  selectedTimer: undefined,

  setTimers: (newValue) => set(() => ({ timers: newValue })),
  setSelectedTimer: (newValue) => set(() => ({ selectedTimer: newValue })),
}))

export default function useTimers() {
  const timersStore = useTimersStore()
  const auth = useAuth()

  const updateLocalTimers = (updatedTimers) => {
    // TODO save to local storage https://capacitorjs.com/docs/apis/storage
    timersStore.setTimers(updatedTimers)
  }

  const handlerPayload = {
    userId: auth?.user?.uid,
    localTimers: timersStore.timers,
    updateLocalTimers,
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
