import create from 'zustand'
import formatDuration from 'format-duration'
import { useMemo } from 'react'

import handleNextRepetition from './handlers/handleNextRepetition'
import handleResetTimer from './handlers/handleResetTimer'

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

  startTimer: () => {
    // TODO KeepAwake()
    set(() => ({ isPlaying: true, isStarted: true }))
  },
  pauseTimer: () => set(() => ({ isPlaying: false })),
  resumeTimer: () => set(() => ({ isPlaying: true })),
  stopTimer: () => {
    // TODO AllowSleep()
    set((state) => ({
      isPlaying: false,
      isStarted: false,
      timerKey: state.timerKey + 1,
    }))
  },
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
  // TODO fix remainingTimeRaw
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

  const resetTimer = () => handleResetTimer({ timerStore })

  const startNextRepetition = () => handleNextRepetition({ timerStore, resetTimer })

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
