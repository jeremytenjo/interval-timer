export default function useTimer({
  initialRepetitions,
  initialSets,
  initialWorkoutTime,
  initialRestTime,
}) {
  console.log({ initialRepetitions, initialSets, initialWorkoutTime, initialRestTime })

  const repetitions = initialRepetitions
  const sets = initialSets
  const workoutTime = initialWorkoutTime
  const restTime = initialRestTime

  const startNextRepetition = () => {
    console.log('startNextRepetition')
  }

  return {
    repetitions,
    sets,
    workoutTime,
    restTime,
    startNextRepetition,
  }
}
