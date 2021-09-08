import create from 'zustand'
import { useLocation } from 'react-router-dom'

import stubs from './stubs'

const useTimersStore = create((set) => ({
  timers: stubs,
  selectedTimer: undefined,

  setTimers: (newTimers) => set(() => ({ timers: newTimers })),
  setSelectedTimer: (newselectedTimer) =>
    set(() => ({ selectedTimer: newselectedTimer })),
}))

export default function useTimers() {
  const useTimerStore = useTimersStore()
  const urlParams = useParams()
  const location = useLocation()

  useEffect(() => {
    let selectedTimer = undefined

    if (urlParams.timerId) {
      selectedTimer = useTimerStore.timers.find(
        (timer) => timer.id.toString() === urlParams.timerId.toString(),
      )
      useTimerStore.setSelectedTimer(selectedTimer)
    }
  }, [location.pathname])

  return {
    data: useTimerStore.timers,
    selectedTimer: useTimerStore.selectedTimer,
    setSelectedTimer: useTimerStore.setSelectedTimer,
  }
}
