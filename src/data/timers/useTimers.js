import create from 'zustand'
import { useLocation } from 'react-router-dom'

import useTimer from '../../pages/Home/containers/Timer/useTimer'

import stubs from './stubs'

const useTimersStore = create((set) => ({
  timers: stubs,
  selectedTimer: undefined,

  setTimers: (newValue) => set(() => ({ timers: newValue })),
  setSelectedTimer: (newValue) => set(() => ({ selectedTimer: newValue })),
}))

export default function useTimers() {
  const timersStore = useTimersStore()
  const timer = useTimer()
  const urlParams = useParams()
  const location = useLocation()

  useEffect(() => {
    let selectedTimer = undefined

    if (urlParams.timerId) {
      selectedTimer = timersStore.timers.find(
        (timer) => timer.id.toString() === urlParams.timerId.toString(),
      )
      timersStore.setSelectedTimer(selectedTimer)
    } else if (timersStore.timers.length) {
      timersStore.selectedTimer?.id.toString() !==
        timersStore?.timers?.[0]?.id.toString() &&
        timersStore.setSelectedTimer(timersStore.timers[0])
    }
  }, [location.pathname])

  useEffect(() => {
    if (timersStore.selectedTimer) {
      timer.setTotalRepetitions(timersStore.selectedTimer.repetitions)
      timer.setTotalSets(timersStore.selectedTimer.sets)
      timer.setTotalWorkoutTime(timersStore.selectedTimer.workout)
      timer.setTotalRestTime(timersStore.selectedTimer.rest)
    }
  }, [timersStore.selectedTimer])

  return {
    data: timersStore.timers,
    selectedTimer: timersStore.selectedTimer,
    setSelectedTimer: timersStore.setSelectedTimer,
  }
}
