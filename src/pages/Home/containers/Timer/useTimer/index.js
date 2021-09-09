import useTimerControls from '../../TimerControls/useTimerControls'

export default function useTimer({
  initialRepetitions,
  initialSets,
  initialWorkoutTime,
  initialRestTime,
}) {
  //   console.log({ initialRepetitions, initialSets, initialWorkoutTime, initialRestTime })
  const timerControls = useTimerControls()

  const repetitions = initialRepetitions
  const sets = initialSets
  const workoutTime = initialWorkoutTime
  const restTime = initialRestTime

  const startNextRepetition = () => {
    console.log('startNextRepetition')

    // if has more reps
    timerControls.restartTimer()
  }

  return {
    repetitions,
    sets,
    workoutTime,
    restTime,
    startNextRepetition,
  }
}
