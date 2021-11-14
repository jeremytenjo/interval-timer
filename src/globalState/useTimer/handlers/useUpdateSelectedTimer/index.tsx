import { useNavigate, useLocation } from 'react-router-dom'

import TimerStoreTypes from '../../types'

type Props = {
  timerStore: TimerStoreTypes
  resetTimer?: (newValue: any) => void
}

export default function useUpdateSelectedTimer({ timerStore, resetTimer }: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  const setSelectedTimer = (newSelectedTimer, { redirect = true } = {}) => {
    if (!newSelectedTimer) return null

    const redirectUrl = `/timer?id=${newSelectedTimer.id}`
    const currentUrl = location.pathname + location.search

    timerStore.setTotalRepetitions(newSelectedTimer.repetitions)
    timerStore.setTrackedRepetitions(newSelectedTimer.repetitions)
    timerStore.setTotalSets(newSelectedTimer.sets)
    timerStore.setTrackedSets(newSelectedTimer.sets)
    timerStore.setTotalWorkoutTime(newSelectedTimer.workout)
    timerStore.setTotalRestTime(newSelectedTimer.rest)
    timerStore.setSelectedTimer(newSelectedTimer)

    resetTimer({ dontResetSetsAndReps: true })

    if (currentUrl !== redirectUrl && redirect) {
      navigate(redirectUrl)
    }
  }

  const setSelectedTimerById = (timerId, timers, { redirect = undefined } = {}) => {
    if (!timers) return null

    const selectedTimerById = timers.find((timer) => timer?.id === timerId)

    if (selectedTimerById) {
      return setSelectedTimer(selectedTimerById, { redirect })
    }

    const firstTimerFromCollection = timers.length ? timers[0] : false

    if (firstTimerFromCollection) {
      return setSelectedTimer(firstTimerFromCollection, { redirect })
    }

    navigate('/create-timer')
  }

  return { setSelectedTimer, setSelectedTimerById }
}
