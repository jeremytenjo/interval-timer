import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'

export default function handleStartTimer({ timerStore, payload }) {
  if (payload) {
    // TODO set new payload
  }
  KeepAwake.keepAwake()
  timerStore.startTimer()
}
