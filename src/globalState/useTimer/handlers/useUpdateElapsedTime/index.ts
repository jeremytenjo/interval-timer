import formatDuration from 'format-duration'

import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification'

export default function useUpdateElapsedTimer({ timerStore, duration }) {
  const timerNotifiction = useTimerNotification({})

  const updateElapsedTime = (newValue) => {
    timerStore.setElapsedTime(newValue)
    const timeRemaining = duration - newValue + 1
    const timeRemainingFormatted = formatDuration(timeRemaining * 1000)

    timerNotifiction.updateTimerNotification.exec({
      timeRemaining: timeRemainingFormatted,
      workoutType: timerStore.type,
    })
  }

  return { updateElapsedTime }
}
