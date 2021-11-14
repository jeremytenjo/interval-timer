import formatDuration from 'format-duration'

import TimerStoreTypes from '../../types'

type Props = {
  timerStore: TimerStoreTypes
}

export default function useTimerMetadata({ timerStore }: Props) {
  const totalTimeRaw =
    timerStore.totalRepetitions *
      timerStore.totalWorkoutTime *
      timerStore.totalSets *
      1000 +
    timerStore.totalSets * timerStore.totalRestTime * timerStore.totalRepetitions * 1000
  const totalTime = formatDuration(totalTimeRaw)
  // TODO fix remainign time, have to 'timerStore.elapsedTime' refers to current workout or rest seconds left not total elapsed time
  const remainingTimeRaw = totalTimeRaw - timerStore.elapsedTime * 1000
  // const remainingTime = formatDuration(remainingTimeRaw)
  const remainingTime = null
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
