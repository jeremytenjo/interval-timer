import formatDuration from 'format-duration'
import { useMemo } from 'react'

export default function useTimerMetadata({ timerStore }) {
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

  return {
    repetitions,
    sets,
    workoutTime,
    restTime,
    duration,
    color,
    remainingTime,
    totalTime,
  }
}
