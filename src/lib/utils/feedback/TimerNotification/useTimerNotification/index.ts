import useAsync from '@useweb/use-async'

import { showTimerNotificationTypes } from '../'
import TimerNotification from '../'

type Props = {
  onStop?: () => void
  onResume?: () => void
  onPause?: () => void
}

export default function useTimerNotification(props: Props) {
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
