import { useRef } from 'react'

import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification'

export default function useUpdateElapsedTimer({ timerStore, duration }) {
  const timeRemainingInTypeRef = useRef(0)
  const timerNotifiction = useTimerNotification({})

  const updateElapsedTime = (newValue) => {
    timerStore.setElapsedTime(newValue)
    const timeRemainingInType = duration - newValue + 1

    timeRemainingInTypeRef.current = timeRemainingInType

    timerNotifiction.setTime.exec({
      timeRemaining: timeRemainingInType,
      workoutType: timerStore.type,
    })
  }

  return { updateElapsedTime, timeRemainingInType: timeRemainingInTypeRef.current }
}
