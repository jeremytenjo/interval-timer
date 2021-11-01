import { useMemo } from 'react'

import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification'

type Options = {
  elapsedTime: string
  workoutType: string
}

export default function useHandleTimerNotification(options: Options) {
  const timerNotifiction = useTimerNotification({
    onStop: () => {
      console.log('F YEAH! stop timer')
      // timer.resetTimer({})
    },
    onResume: () => {
      console.log('F YEAH! start timer')
      // timer.resumeTimer()
    },
    onPause: () => {
      console.log('F YEAH! pause timer')
      // timer.pauseTimer()
    },
  })

  useMemo(() => {
    timerNotifiction.setTime.exec({
      timeRemaining: options.elapsedTime,
      workoutType: options.workoutType,
    })
  }, [options.elapsedTime])

  return timerNotifiction
}
