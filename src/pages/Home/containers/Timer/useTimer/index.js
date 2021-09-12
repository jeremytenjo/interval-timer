import create from 'zustand'

import useTimerControls from '../../TimerControls/useTimerControls'

const useTimerStore = create((set) => ({
  totalRepetitions: 0,
  totalSets: 0,
  totalWorkoutTime: 0,
  totalRestTime: 0,

  setTotalRepetitions: (newValue) => set(() => ({ totalRepetitions: newValue })),
  setTotalSets: (newValue) => set(() => ({ totalSets: newValue })),
  setTotalWorkoutTime: (newValue) => set(() => ({ totalWorkoutTime: newValue })),
  setTotalRestTime: (newValue) => set(() => ({ totalRestTime: newValue })),
}))

export default function useTimer() {
  const timerStore = useTimerStore()
  const timerControls = useTimerControls()
  const [type, setType] = useState('Workout')

  const [trackedRepetitions, setTrackedRepetitions] = useState(
    timerStore.totalRepetitions,
  )
  const [trackedSteps, setTrackedSets] = useState(timerStore.totalSets)

  const isRest = type === 'Rest'
  const workoutTime = timerStore.totalWorkoutTime
  const restTime = timerStore.totalRestTime
  const duration = isRest ? timerStore.totalRestTime : timerStore.totalWorkoutTime
  const color = isRest ? '#D72E33' : '#36B273'

  const repetitions = !timerControls.isStarted
    ? timerStore.totalRepetitions
    : trackedRepetitions
  const sets = !timerControls.isStarted ? timerStore.totalSets : trackedSteps

  const resetTimer = () => {
    setTrackedRepetitions(timerStore.totalRepetitions)
    setTrackedSets(timerStore.totalSets)
  }

  const startNextRepetition = () => {
    const nextRepetition = trackedRepetitions - 1

    // if has more reps
    setTrackedRepetitions(nextRepetition)
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
    resetTimer,
    ...timerStore,
  }
}
