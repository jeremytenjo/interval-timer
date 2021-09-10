import create from 'zustand'

import useTimerControls from '../../TimerControls/useTimerControls'

const useTimerStore = create((set) => ({
  initialRepetitions: 0,
  initialSets: 0,
  initialWorkoutTime: 0,
  initialRestTime: 0,

  setInitialRepetitions: (newValue) => set(() => ({ initialRepetitions: newValue })),
  setInitialSets: (newValue) => set(() => ({ initialSets: newValue })),
  setInitialWorkoutTime: (newValue) => set(() => ({ initialWorkoutTime: newValue })),
  setInitialRestTime: (newValue) => set(() => ({ initialRestTime: newValue })),
}))

export default function useTimer() {
  const timerStore = useTimerStore()
  const timerControls = useTimerControls()
  const [type, setType] = useState('Workout')

  const [repetitions, setRepetitions] = useState(timerStore.initialRepetitions)
  const [sets, setSets] = useState(timerStore.initialSets)

  const isRest = type === 'Rest'
  const workoutTime = timerStore.initialWorkoutTime
  const restTime = timerStore.initialRestTime
  const duration = isRest ? timerStore.initialRestTime : timerStore.initialWorkoutTime
  const color = isRest ? '#D72E33' : '#36B273'

  const startNextRepetition = () => {
    const nextRepetition = repetitions - 1

    // if has more reps
    setRepetitions(nextRepetition)
    setType((currentStep) => (currentStep === 'Rest' ? 'Workout' : 'Rest'))
    timerControls.restartTimer()
  }

  return {
    repetitions,
    sets,
    workoutTime,
    restTime,
    startNextRepetition,
    type,
    duration,
    color,
    ...timerStore,
  }
}
