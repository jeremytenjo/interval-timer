import formatDuration from 'format-duration'

type Return = {
  repetitions: number
  sets: number
  workoutTime: string
  restTime: string
  duration: string
  color: string
  remainingTime: string
  totalTime: string
}

export default function useTimerMetadata({ timerStore }): Return {
  const totalTimeRaw =
    timerStore.totalRepetitions *
      timerStore.totalWorkoutTime *
      timerStore.totalSets *
      1000 +
    timerStore.totalSets * timerStore.totalRestTime * timerStore.totalRepetitions * 1000
  const totalTime = formatDuration(totalTimeRaw)
  const remainingTimeRaw = totalTimeRaw - timerStore.elapsedTime * 1000
  const remainingTime = formatDuration(remainingTimeRaw)
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
