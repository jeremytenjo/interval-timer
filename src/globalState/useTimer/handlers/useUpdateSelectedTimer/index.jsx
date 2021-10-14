import { useNavigate, useLocation } from 'react-router-dom'

export default function useUpdateSelectedTimer({ timerStore, resetTimer }) {
  const navigate = useNavigate()
  const location = useLocation()

  const setSelectedTimer = (newSelectedTimer, { redirect = true } = {}) => {
    if (!newSelectedTimer) return null

    const redirectUrl = `/timer/${newSelectedTimer.id}`

    timerStore.setTotalRepetitions(newSelectedTimer.repetitions)
    timerStore.setTrackedRepetitions(newSelectedTimer.repetitions)
    timerStore.setTotalSets(newSelectedTimer.sets)
    timerStore.setTrackedSets(newSelectedTimer.sets)
    timerStore.setTotalWorkoutTime(newSelectedTimer.workout)
    timerStore.setTotalRestTime(newSelectedTimer.rest)

    timerStore.setSelectedTimer(newSelectedTimer)

    resetTimer()

    if (location.pathname !== redirectUrl && redirect) {
      navigate(redirectUrl)
    }
  }

  const setSelectedTimerById = (timerId, timers, { redirect } = {}) => {
    if (!timers) return null

    const selectedTimer = timers.find((timer) => timer?.id === timerId)

    setSelectedTimer(selectedTimer, { redirect })
  }

  return { setSelectedTimer, setSelectedTimerById }
}
