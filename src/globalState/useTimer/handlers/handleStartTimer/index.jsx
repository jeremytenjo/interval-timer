import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'

export default function handleStartTimer({ timerStore, timerNotification }) {
  timerNotification.showNotification()
  KeepAwake.keepAwake()
  timerStore.startTimer()
}
