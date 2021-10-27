import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'
import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification'

export default function useHandlerStartTimer({ timerStore }) {
  const timerNotification = useTimerNotification({})

  const startTimer = () => {
    timerNotification.showNotification.exec()
    KeepAwake.keepAwake()
    timerStore.startTimer()
  }

  return startTimer
}
