import useTimerControls from '../../TimerControls/useTimerControls'

export default function useTimer({
  initialRepetitions,
  initialSets,
  initialWorkoutTime,
  initialRestTime,
}) {
  //   console.log({ initialRepetitions, initialSets, initialWorkoutTime, initialRestTime })
  const timerControls = useTimerControls()
  const [type, setType] = useState('Workout')
  const isRest = type === 'Rest'

  const repetitions = initialRepetitions
  const sets = initialSets
  const workoutTime = initialWorkoutTime
  const restTime = initialRestTime

  const startNextRepetition = () => {
    // if has more reps
    setType((currentStep) => (currentStep === 'Rest' ? 'Workout' : 'Rest'))
    timerControls.restartTimer()
  }

  const duration = isRest ? initialRestTime : initialWorkoutTime
  const color = isRest ? '#D72E33' : '#36B273'

  return {
    repetitions,
    sets,
    workoutTime,
    restTime,
    startNextRepetition,
    type,
    duration,
    color,
  }
}
