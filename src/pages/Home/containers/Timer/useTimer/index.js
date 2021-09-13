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

    if (nextType === 'Workout') {
      if (nextRepetition === 0) {
        timerStore.setTrackedRepetitions(timerStore.totalRepetitions)

        if (nextSet === 0) {
          resetTimer()
        } else {
          timerStore.setTrackedSets(nextSet)
        }
      } else {
        // if has more reps
        timerStore.setTrackedRepetitions(nextRepetition)
      }
    }

    // console.log({ nextRepetition, nextSet })
    // TODO
    if (nextRepetition !== 0 && nextSet !== 0) {
      timerStore.setType(nextType)
      timerControls.restartTimer()
    } else {
      resetTimer()
      timerControls.stopTimer()
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
