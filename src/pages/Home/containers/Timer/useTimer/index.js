import useTimerControls from '../../TimerControls/useTimerControls'

export default function useTimer({
  initialRepetitions,
  initialSets,
  initialWorkoutTime,
  initialRestTime,
}) {
  //   console.log({ initialRepetitions, initialSets, initialWorkoutTime, initialRestTime })
  const timerControls = useTimerControls()
  const [type, setType] = useState('Rest')

  const repetitions = initialRepetitions
  const sets = initialSets
  const workoutTime = initialWorkoutTime
  const restTime = initialRestTime

  const startNextRepetition = () => {
    console.log('startNextRepetition')
    const nextStep = type === 'Rest' ? 'Workout' : 'Rest'

    // if has more reps
    timerControls.restartTimer()
    setType(nextStep)
  }

  return {
    repetitions,
    sets,
    workoutTime,
    restTime,
    startNextRepetition,
    type,
  }
}
