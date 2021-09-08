import create from 'zustand'
import { useLocation } from 'react-router-dom'

import stubs from './stubs'

const useTimersStore = create((set) => ({
  timers: stubs,
  selectedTimer: undefined,

  setTimers: (newValue) => set(() => ({ timers: newValue })),
  setSelectedTimer: (newValue) => set(() => ({ selectedTimer: newValue })),
}))

export default function useTimers() {
  const timersSore = useTimersStore()
  const urlParams = useParams()
  const location = useLocation()

  useEffect(() => {
    let selectedTimer = undefined

    if (urlParams.timerId) {
      selectedTimer = timersSore.timers.find(
        (timer) => timer.id.toString() === urlParams.timerId.toString(),
      )
      timersSore.setSelectedTimer(selectedTimer)
    } else if (timersSore.timers.length) {
      timersSore.selectedTimer?.id.toString() !==
        timersSore?.timers?.[0]?.id.toString() &&
        timersSore.setSelectedTimer(timersSore.timers[0])
    }
  }, [location.pathname])

  return {
    data: timersSore.timers,
    selectedTimer: timersSore.selectedTimer,
    setSelectedTimer: timersSore.setSelectedTimer,
  }
}
