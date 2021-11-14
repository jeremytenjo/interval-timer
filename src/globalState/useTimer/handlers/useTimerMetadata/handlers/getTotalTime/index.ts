import formatDuration from 'format-duration'

import TimerStoreTypes from '../../../../types'

type Props = {
  timerStore: TimerStoreTypes
}

type Return = {
  totalTime: string
  totalTimeRaw: number
}

export default function getTotalTime({ timerStore }: Props): Return {
  const totalTimeRaw =
    timerStore.totalRepetitions *
      timerStore.totalWorkoutTime *
      timerStore.totalSets *
      1000 +
    timerStore.totalSets * timerStore.totalRestTime * timerStore.totalRepetitions * 1000
  const totalTime = formatDuration(totalTimeRaw)

  return { totalTime, totalTimeRaw }
}
