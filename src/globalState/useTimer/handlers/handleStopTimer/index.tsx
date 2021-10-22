import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'

export default function handleStopTimer({ timerStore, timerNotification }) {
  timerNotification.removeNotification()
  KeepAwake.allowSleep()
  timerStore.stopTimer()
}
