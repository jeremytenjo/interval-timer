import useOnTrue from '@useweb/use-on-true'
import { useNavigate } from 'react-router-dom'

export default function useUpdateSelectedTimer({ timerStore, resetTimer }) {
  const navigate = useNavigate()
  const urlParams = useParams()

  useOnTrue(timerStore.selectedTimer, () => {
    timerStore.setTotalRepetitions(timerStore.selectedTimer.repetitions)
    timerStore.setTrackedRepetitions(timerStore.selectedTimer.repetitions)
    timerStore.setTotalSets(timerStore.selectedTimer.sets)
    timerStore.setTrackedSets(timerStore.selectedTimer.sets)
    timerStore.setTotalWorkoutTime(timerStore.selectedTimer.workout)
    timerStore.setTotalRestTime(timerStore.selectedTimer.rest)

    resetTimer()

    if (timerStore.selectedTimer.id !== urlParams.timerId) {
      navigate(`/timer/${timerStore.selectedTimer.id}`)
    }
  })
}
