import create from 'zustand'
import formatDuration from 'format-duration'
import { useMemo } from 'react'

const useTimerStore = create((set) => ({
  // timer info
  totalRepetitions: 0,
  totalSets: 0,
  totalWorkoutTime: 0,
  totalRestTime: 0,
  trackedRepetitions: 0,
  trackedSets: 0,
  type: 'Workout',
  elapsedTime: 0,

  setTotalRepetitions: (newValue) => set(() => ({ totalRepetitions: newValue })),
  setTotalSets: (newValue) => set(() => ({ totalSets: newValue })),
  setTotalWorkoutTime: (newValue) => set(() => ({ totalWorkoutTime: newValue })),
  setTotalRestTime: (newValue) => set(() => ({ totalRestTime: newValue })),
  setTrackedRepetitions: (newValue) => set(() => ({ trackedRepetitions: newValue })),
  setTrackedSets: (newValue) => set(() => ({ trackedSets: newValue })),
  setType: (newValue) => set(() => ({ type: newValue })),
  setElapsedTime: (newValue) => set(() => ({ elapsedTime: newValue })),

  // timer controls
  isPlaying: false,
  isStarted: false,
  timerKey: 1,

  startTimer: () => set(() => ({ isPlaying: true, isStarted: true })),
  pauseTimer: () => set(() => ({ isPlaying: false })),
  resumeTimer: () => set(() => ({ isPlaying: true })),
  stopTimer: () =>
    set((state) => ({
      isPlaying: false,
      isStarted: false,
      timerKey: state.timerKey + 1,
    })),
  restartTimer: () =>
    set((state) => {
      state.startTimer()
      return { timerKey: state.timerKey + 1 }
    }),
}))

export default function useTimer() {
  const timerStore = useTimerStore()
  const totalTimeRaw =
    timerStore.totalRepetitions * timerStore.totalWorkoutTime * 1000 +
    timerStore.totalSets * timerStore.totalRestTime * 1000
  const totalTime = formatDuration(totalTimeRaw)
  const remainingTimeRaw = totalTimeRaw - timerStore.elapsedTime
  const remainingTime = useMemo(
    () => formatDuration(remainingTimeRaw),
    [remainingTimeRaw],
  )
  const isRest = timerStore.type === 'Rest'
  const workoutTime = timerStore.totalWorkoutTime
  const restTime = timerStore.totalRestTime
  const duration = isRest ? timerStore.totalRestTime : timerStore.totalWorkoutTime
  const color = isRest ? '#D72E33' : '#36B273'

  const repetitions = !timerStore.isStarted
    ? timerStore.totalRepetitions
    : timerStore.trackedRepetitions

  const sets = !timerStore.isStarted ? timerStore.totalSets : timerStore.trackedSets

  const resetTimer = () => {
    timerStore.setType('Workout')
    timerStore.setTrackedRepetitions(timerStore.totalRepetitions)
    timerStore.setTrackedSets(timerStore.totalSets)
    timerStore.stopTimer()
  }

  const startNextRepetition = () => {
    const nextType = timerStore.type === 'Rest' ? 'Workout' : 'Rest'
    const nextRepetition = timerStore.trackedRepetitions - 1
    const nextSet = timerStore.trackedSets - 1

    // On rest start
    if (nextType === 'Rest') {
      timerStore.setType(nextType)
      timerStore.restartTimer()
    }

    // On workout start
    if (nextType === 'Workout') {
      // if no more reps or sets
      if (nextRepetition === 0 && nextSet === 0) {
        resetTimer()
        return
      }

      if (nextRepetition !== 0) {
        // if has more repetitions
        timerStore.setTrackedRepetitions(nextRepetition)
        timerStore.setType(nextType)
        timerStore.restartTimer()
      }

      // if no more repetitions
      if (nextRepetition === 0 && nextSet === 1) {
        timerStore.setTrackedRepetitions(timerStore.totalRepetitions)
        timerStore.setTrackedSets(nextSet)
        timerStore.restartTimer()
      }
    }
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
    remainingTime,
    totalTime,
    ...timerStore,
  }
}
