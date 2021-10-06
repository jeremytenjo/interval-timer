import { useNavigate, useLocation } from 'react-router-dom'

import { useTimersStore } from '../../../../data/timers/useTimers'

export default function useUpdateSelectedTimer({ timerStore, resetTimer }) {
  const navigate = useNavigate()
  const location = useLocation()

  const setSelectedTimer = (newSelectedTimer) => {
    const redirectUrl = `/timer/${newSelectedTimer.id}`

    timerStore.setTotalRepetitions(newSelectedTimer.repetitions)
    timerStore.setTrackedRepetitions(newSelectedTimer.repetitions)
    timerStore.setTotalSets(newSelectedTimer.sets)
    timerStore.setTrackedSets(newSelectedTimer.sets)
    timerStore.setTotalWorkoutTime(newSelectedTimer.workout)
    timerStore.setTotalRestTime(newSelectedTimer.rest)

    timerStore.setSelectedTimer(newSelectedTimer)

    resetTimer()

    if (location.pathname !== redirectUrl) {
      navigate(redirectUrl)
    }
  }

  const setSelectedTimerById = (timerId) => {
    const timers = useTimersStore.getState().timers
    const selectedTimer = timers.find((timer) => timer.id === timerId)

    setSelectedTimer(selectedTimer)
  }

  return { setSelectedTimer, setSelectedTimerById }
}
