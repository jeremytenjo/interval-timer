import create from 'zustand'
import { useLocation } from 'react-router-dom'

import useTimer from '../../globalState/useTimer'
import arrayDB from '../../lib/utils/array/arrayDB'
import useAuth from '../../globalState/useAuth'

import useGetTimers from './handlers/useGetTimers'
import useAddTimer from './handlers/useAddTimer'
import useUpdateTimer from './handlers/useUpdateTimer'
import useRemoveTimer from './handlers/useRemoveTimer'

const useTimersStore = create((set) => ({
  timers: [],
  selectedTimer: undefined,

  setTimers: (newValue) => set(() => ({ timers: newValue })),
  setSelectedTimer: (newValue) => set(() => ({ selectedTimer: newValue })),
}))

export default function useTimers() {
  const timersStore = useTimersStore()
  const timer = useTimer()
  const urlParams = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const auth = useAuth()
  const userId = auth?.user?.uid
  const getTimers = useGetTimers({
    userId,
    localTimers: timersStore.timers,
    updateLocalTimers: timersStore.setTimers,
  })
  const addTimer = useAddTimer({
    userId,
    localTimers: timersStore.timers,
    updateLocalTimers: timersStore.setTimers,
  })
  const updateTimer = useUpdateTimer({
    userId,
    localTimers: timersStore.timers,
    updateLocalTimers: timersStore.setTimers,
  })
  const removeTimer = useRemoveTimer({
    userId,
    localTimers: timersStore.timers,
    updateLocalTimers: timersStore.setTimers,
  })

  useEffect(() => {
    if (userId) {
      getTimers.exec()
    }
  }, [auth.user])

  useEffect(() => {
    if (getTimers.result) {
      timersStore.setTimers(getTimers.result)

      if (!timersStore.selectedTimer && getTimers.result.length) {
        navigate(`/timer/${getTimers.result[0].id}`)
      }
    }
  }, [getTimers.result])

  useEffect(() => {
    if (addTimer.result) {
      const updatedTimers = arrayDB.add(timersStore.timers, { data: addTimer.result })
      timersStore.setTimers(updatedTimers)
    }
  }, [addTimer.result])

  useEffect(() => {
    let selectedTimer = undefined

    if (urlParams.timerId) {
      selectedTimer = timersStore.timers.find(
        (timer) => timer.id.toString() === urlParams.timerId.toString(),
      )
      timersStore.setSelectedTimer(selectedTimer)
    } else if (!urlParams.timerId && !timersStore.selectedTimer) {
      timersStore.selectedTimer?.id.toString() !==
        timersStore?.timers?.[0]?.id.toString() &&
        timersStore.setSelectedTimer(timersStore.timers[0])
    }
  }, [location.pathname])

  useEffect(() => {
    if (timersStore.selectedTimer) {
      timer.setTotalRepetitions(timersStore.selectedTimer.repetitions)
      timer.setTrackedRepetitions(timersStore.selectedTimer.repetitions)
      timer.setTotalSets(timersStore.selectedTimer.sets)
      timer.setTrackedSets(timersStore.selectedTimer.sets)
      timer.setTotalWorkoutTime(timersStore.selectedTimer.workout)
      timer.setTotalRestTime(timersStore.selectedTimer.rest)
    }
  }, [timersStore.selectedTimer])

  return {
    data: timersStore.timers,
    selectedTimer: timersStore.selectedTimer,
    updateTimer,
    removeTimer,
    addTimer,
  }
}
