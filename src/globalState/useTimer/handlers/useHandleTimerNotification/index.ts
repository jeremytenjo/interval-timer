import { useMemo } from 'react'

import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification'

type Options = {
  remainingTime: string
}

export default function useHandleTimerNotification(options: Options) {
  const timerNotifiction = useTimerNotification({
    onStop: () => {
      console.log('stop timer')
    },
    onStart: () => {
      console.log('start timer')
    },
    onPause: () => {
      console.log('pause timer')
    },
  })

  useMemo(() => {
    // timerNotifiction.setTime(options.remainingTime)
  }, [options.remainingTime])

  return timerNotifiction
}
