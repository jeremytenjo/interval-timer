import useOnTrue from '@useweb/use-on-true'

import useTimer from '../../../useTimer'

export default function useUpdateSelectedTimer({
  localTimers,
  setSelectedTimer,
  selectedTimer,
}) {
  const urlParams = useParams()
  const timer = useTimer()

  // useEffect(() => {
  //   if (urlParams.timerId) {
  //     const newSelectedTimer = localTimers.find(
  //       (timer) => timer.id.toString() === urlParams.timerId.toString(),
  //     )

  //     setSelectedTimer(newSelectedTimer)
  //   }
  // }, [urlParams.timerId, localTimers])

  useOnTrue(selectedTimer, () => {
    timer.setTotalRepetitions(selectedTimer.repetitions)
    timer.setTrackedRepetitions(selectedTimer.repetitions)
    timer.setTotalSets(selectedTimer.sets)
    timer.setTrackedSets(selectedTimer.sets)
    timer.setTotalWorkoutTime(selectedTimer.workout)
    timer.setTotalRestTime(selectedTimer.rest)
  })
}
