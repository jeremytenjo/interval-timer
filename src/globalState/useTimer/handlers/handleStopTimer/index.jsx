import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'

export default function handleStopTimer({ timerStore, timerNotification }) {
  timerNotification.hideNotification()
  KeepAwake.allowSleep()
  timerStore.stopTimer()
}
