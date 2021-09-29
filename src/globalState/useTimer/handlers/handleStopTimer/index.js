import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'

export default function handleStopTimer({ timerStore }) {
  KeepAwake.allowSleep()
  timerStore.stopTimer()
}
