import formatDuration from 'format-duration'

import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification'
import TimerStoreTypes from '../../types'

type Props = {
  timerStore: TimerStoreTypes
  udpateTimeRemainingFormatted?: (newValue: any) => void
}

export default function useUpdateElapsedTimer({
  timerStore,
  udpateTimeRemainingFormatted,
}: Props) {
  const timerNotifiction = useTimerNotification({})

  const updateElapsedTime = (newValue) => {
    timerStore.setElapsedTime(newValue)
    const timeRemainingFormatted = formatDuration(newValue * 1000)

    udpateTimeRemainingFormatted(timeRemainingFormatted)

    timerNotifiction.updateTimerNotification.exec({
      timeRemaining: timeRemainingFormatted,
      workoutType: timerStore.type,
      isPaused: false,
    })
  }

  return { updateElapsedTime }
}
