import useOnTrue from '@useweb/use-on-true'
import { useNavigate } from 'react-router-dom'

import useSelectedTimer from '../../../useSelectedTimer'

export default function useUpdateTimer({ timerStore }) {
  const selectedTimer = useSelectedTimer()
  const navigate = useNavigate()

  useOnTrue(selectedTimer.selectedTimer, () => {
    timerStore.setTotalRepetitions(selectedTimer.selectedTimer.repetitions)
    timerStore.setTrackedRepetitions(selectedTimer.selectedTimer.repetitions)
    timerStore.setTotalSets(selectedTimer.selectedTimer.sets)
    timerStore.setTrackedSets(selectedTimer.selectedTimer.sets)
    timerStore.setTotalWorkoutTime(selectedTimer.selectedTimer.workout)
    timerStore.setTotalRestTime(selectedTimer.selectedTimer.rest)
    console.log('HERE!')
    navigate(`/timer/${selectedTimer.selectedTimer.id}`)
  })
}
