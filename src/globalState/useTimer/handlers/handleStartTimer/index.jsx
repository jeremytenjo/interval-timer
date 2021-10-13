import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'

export default function handleStartTimer({ timerStore }) {
  KeepAwake.keepAwake()
  timerStore.startTimer()
}
