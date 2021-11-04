import formatDuration from 'format-duration'

import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification'

export default function useUpdateElapsedTimer({
  timerStore,
  udpateTimeRemainingFormatted,
}) {
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
