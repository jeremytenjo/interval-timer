import { useNavigate, useLocation } from 'react-router-dom'

import useData from '../../../../lib/utils/data/useData'

export default function useUpdateSelectedTimer({ timerStore, resetTimer }) {
  const navigate = useNavigate()
  const location = useLocation()
  const timers = useData({ key: 'timers' })

  const setSelectedTimer = (newSelectedTimer) => {
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

    if (location.pathname !== redirectUrl) {
      navigate(redirectUrl)
    }
  }

  const setSelectedTimerById = (timerId) => {
    if (timers.data) {
      const selectedTimer = timers.data.find((timer) => timer?.id === timerId)

      setSelectedTimer(selectedTimer)
    }
  }

  return { setSelectedTimer, setSelectedTimerById }
}
