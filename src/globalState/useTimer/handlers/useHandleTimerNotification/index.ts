import { useMemo } from 'react'

import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification'

type Props = {
  elapsedTime: string
  workoutType: string
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
    },
    onPause: () => {
      props.pauseTimer()
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
