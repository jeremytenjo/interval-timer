import TimerStoreTypes from '../../types'

import getTotalTime from './handlers/getTotalTime'
import getRemainingTime from './handlers/getRemainingTime'

type Props = {
  timerStore: TimerStoreTypes
}

export default function useTimerMetadata({ timerStore }: Props) {
  const { totalTime, totalTimeRaw } = getTotalTime({ timerStore })
  const { remainingTime } = getRemainingTime({ timerStore, totalTimeRaw })
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
