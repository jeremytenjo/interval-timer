import { useMemo } from 'react'

import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification'

type Props = {
  elapsedTime: string
  workoutType: string
  timeRemainingInType: number
  resetTimer: () => void
  resumeTimer: () => void
  pauseTimer: () => void
}

export default function useHandleTimerNotification(props: Props) {
  const timerNotifiction = useTimerNotification({
    onStop: () => {
      props.resetTimer()
    },
    onResume: () => {
      props.resumeTimer()
      // TODO change notification button to pause
    },
    onPause: () => {
      props.pauseTimer()
      // TODO change notification button to resume
    },
  })

  useMemo(() => {
    timerNotifiction.setTime.exec({
      timeRemaining: props.elapsedTime,
      workoutType: props.workoutType,
    })
  }, [props.elapsedTime])

  return timerNotifiction
}
