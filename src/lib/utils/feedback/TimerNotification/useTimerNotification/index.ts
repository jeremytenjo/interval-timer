import useAsync from '@useweb/use-async'
import { useEffect } from 'react'

import { showTimerNotificationTypes } from '../'
import TimerNotification from '../'

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

  const showNotification = useAsync(async () => {
    await TimerNotification.showTimerNotification({})
  })

  const setTime = useAsync(async (props: showTimerNotificationTypes) => {
    await TimerNotification.showTimerNotification({
      timeRemaining: props.timeRemaining,
      workoutType: props.workoutType,
    })
  })

  const removeNotification = useAsync(async () => {
    await TimerNotification.removeNotification()
  })

  return { setTime, showNotification, removeNotification }
}
