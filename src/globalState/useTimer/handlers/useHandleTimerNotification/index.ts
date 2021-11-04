import { useMemo } from 'react'

import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification'
import TimerNotification from '../../../../lib/utils/feedback/TimerNotification'

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
    // TODO change notification button to pause
    // TODO change notification button to resume
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
