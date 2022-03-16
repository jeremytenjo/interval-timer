import { useMemo } from 'react'

import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification/useTimerNotification'

type Props = {
  timerIsPlaying: boolean
  timerIsStarted: boolean
  workoutType: string
  timeRemainingInType: string
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
    if (props.timerIsStarted) {
      const isPaused = !props.timerIsPlaying
      timerNotifiction.updateTimerNotification.exec({
        timeRemaining: props.timeRemainingInType,
        workoutType: props.workoutType,
        isPaused,
      })
    }
  }, [props.timerIsPlaying, props.timerIsStarted])

  return timerNotifiction
}
