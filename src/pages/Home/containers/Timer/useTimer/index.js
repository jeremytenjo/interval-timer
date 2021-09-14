import create from 'zustand'
import formatDuration from 'format-duration'
import { useMemo } from 'react'

import useTimerControls from '../../TimerControls/useTimerControls'

const useTimerStore = create((set) => ({
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
}))

export default function useTimer() {
  const timerStore = useTimerStore()
  const timerControls = useTimerControls()
  const totalTimeRaw =
    1000 *
    timerStore.totalRepetitions *
    timerStore.totalSets *
    timerStore.totalRestTime *
    timerStore.totalWorkoutTime
  const totalTime = formatDuration(totalTimeRaw)
  const remainingTimeRaw = totalTimeRaw - timerStore.elapsedTime * 1000
  const remainingTime = useMemo(
    () => formatDuration(remainingTimeRaw),
    [remainingTimeRaw],
  )
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
    const nextRepetition = timerStore.trackedRepetitions - 1
    const nextSet = timerStore.trackedSets - 1

    // On rest start
    if (nextType === 'Rest') {
      timerStore.setType(nextType)
      timerControls.restartTimer()
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
        timerControls.restartTimer()
      }

      // if no more repetitions
      if (nextRepetition === 0 && nextSet === 1) {
        timerStore.setTrackedRepetitions(timerStore.totalRepetitions)
        timerStore.setTrackedSets(nextSet)
        timerControls.restartTimer()
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
