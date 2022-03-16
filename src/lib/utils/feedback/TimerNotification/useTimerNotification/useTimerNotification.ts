import useAsync from '@useweb/use-async'
import { useEffect } from 'react'

import { updateTimerNotificationTypes } from '../TimerNotification'
import TimerNotification from '../TimerNotification'

type Props = {
  onStop?: () => void
  onResume?: () => void
  onPause?: () => void
}

export default function useTimerNotification(props: Props) {
  useEffect(() => {
    const onStopTimerListener = TimerNotification.addListener('onStopTimer', props.onStop)
    const onResumeTimerListener = TimerNotification.addListener(
      'onResumeTimer',
      props.onResume,
    )
    const onPauseTimerListener = TimerNotification.addListener(
      'onPauseTimer',
      props.onPause,
    )

    return () => {
      onStopTimerListener.remove()
      onResumeTimerListener.remove()
      onPauseTimerListener.remove()
    }
  }, [])

  const updateTimerNotification = useAsync({
    fn: async (props: updateTimerNotificationTypes) => {
      await TimerNotification.updateTimerNotification({
        timeRemaining: props.timeRemaining,
        workoutType: props.workoutType,
        isPaused: props.isPaused,
      })
    },
  })

  const removeNotification = useAsync({
    fn: async () => {
      await TimerNotification.removeNotification()
    },
  })

  return { updateTimerNotification, removeNotification }
}
