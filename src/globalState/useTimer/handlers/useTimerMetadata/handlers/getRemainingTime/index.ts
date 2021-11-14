import formatDuration from 'format-duration'

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
  // TODOS fix remainign time, have to 'timerStore.elapsedTime' refers to current workout or rest seconds left not total elapsed time

  const remainingTimeRaw = totalTimeRaw - timerStore.elapsedTime * 1000
  // const remainingTime = formatDuration(remainingTimeRaw)
  const remainingTime = null

  return { remainingTime, remainingTimeRaw }
}
