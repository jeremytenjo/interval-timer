import create from 'zustand'

import useTimerControls from '../../TimerControls/useTimerControls'

const useTimerStore = create((set) => ({
  totalRepetitions: 0,
  totalSets: 0,
  totalWorkoutTime: 0,
  totalRestTime: 0,
  trackedRepetitions: 0,
  trackedSets: 0,
  type: 'Workout',

  setTotalRepetitions: (newValue) => set(() => ({ totalRepetitions: newValue })),
  setTotalSets: (newValue) => set(() => ({ totalSets: newValue })),
  setTotalWorkoutTime: (newValue) => set(() => ({ totalWorkoutTime: newValue })),
  setTotalRestTime: (newValue) => set(() => ({ totalRestTime: newValue })),
  setTrackedRepetitions: (newValue) => set(() => ({ trackedRepetitions: newValue })),
  setTrackedSets: (newValue) => set(() => ({ trackedSets: newValue })),
  setType: (newValue) => set(() => ({ type: newValue })),
}))

export default function useTimer() {
  const timerStore = useTimerStore()
  const timerControls = useTimerControls()

  const isRest = timerStore.type === 'Rest'
  const workoutTime = timerStore.totalWorkoutTime
  const restTime = timerStore.totalRestTime
  const duration = isRest ? timerStore.totalRestTime : timerStore.totalWorkoutTime
  const color = isRest ? '#D72E33' : '#36B273'

  const repetitions = !timerControls.isStarted
    ? timerStore.totalRepetitions
    : timerStore.trackedRepetitions

  const sets = !timerControls.isStarted ? timerStore.totalSets : timerStore.trackedSets

  const resetTimer = () => {
    timerStore.setType('Workout')
    timerStore.setTrackedRepetitions(timerStore.totalRepetitions)
    timerStore.setTrackedSets(timerStore.totalSets)
  }

  const startNextRepetition = () => {
    const nextType = timerStore.type === 'Rest' ? 'Workout' : 'Rest'

    if (nextType === 'Workout') {
      const nextRepetition = timerStore.trackedRepetitions - 1

      // if has more reps
      timerStore.setTrackedRepetitions(nextRepetition)
    }

    timerStore.setType(nextType)
    timerControls.restartTimer()
  }

  return {
    repetitions,
    sets,
    workoutTime,
    restTime,
    startNextRepetition,
    duration,
    color,
    resetTimer,
    ...timerStore,
  }
}
