// import formatDuration from 'format-duration'

import TimerStoreTypes from '../../../../types'

type Props = {
  timerStore: TimerStoreTypes
  totalTimeRaw: number
}

type Return = {
  remainingTime: string
  remainingTimeRaw: number
}

export default function getRemainingTime({ timerStore, totalTimeRaw }: Props): Return {
  // TODO fix remainign time, have to 'timerStore.elapsedTime' refers to current workout or rest seconds left not total elapsed time

  let remainingTimeRaw =
    timerStore.trackedRepetitions *
      timerStore.totalWorkoutTime *
      timerStore.trackedSets *
      1000 +
    timerStore.trackedSets *
      timerStore.totalRestTime *
      timerStore.trackedRepetitions *
      1000
  remainingTimeRaw = totalTimeRaw - remainingTimeRaw
  // const remainingTime = formatDuration(remainingTimeRaw)
  const remainingTime = null

  return { remainingTime, remainingTimeRaw }
}
