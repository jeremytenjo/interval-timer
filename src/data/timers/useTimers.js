import create from 'zustand'
import { useLocation } from 'react-router-dom'

import useTimer from '../../globalState/useTimer'
import arrayDB from '../../lib/utils/array/arrayDB'
import useAuth from '../../globalState/useAuth'

import useGetTimers from './handlers/useGetTimers'
import useAddTimer from './handlers/useAddTimer'

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
  const auth = useAuth()
  const getTimers = useGetTimers({ userId: auth?.user?.uid })
  const addTimer = useAddTimer({ userId: auth?.user?.uid })
  // const updateTimer = useUpdateTimer()
  // const removeTimer = useRemoveTimer()

  useEffect(() => {
    if (addTimer.result) {
      const updatedTimers = arrayDB.add(timersStore.timers, { data: addTimer.result })
      timersStore.setTimers(updatedTimers)
    }
  }, [addTimer.result])

  useEffect(() => {
    if (auth?.user?.uid) {
      getTimers.exec()
    }
  }, [auth.user])

  useEffect(() => {
    if (getTimers.result) {
      timersStore.setTimers(getTimers.result)
    }
  }, [getTimers.result])

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

  const updateTimer = ({ id, data }) => {
    console.log('updateTimer')
    // TODO update timer in database

    // TODO update timer in global state
    console.log(timersStore.timers)
    const updatedData = arrayDB.update(timersStore.timers, {
      id,
      data,
    })
    console.log(updatedData)
    timersStore.setTimers(updatedData)
  }

  const removeTimer = ({ id }) => {
    console.log('removeTimer' + id)
    // TODO remove timer in database

    // TODO remove timer in global state
  }

  return {
    data: timersStore.timers,
    selectedTimer: timersStore.selectedTimer,
    updateTimer,
    removeTimer,
    addTimer,
  }
}
