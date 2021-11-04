import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'

export default function useHandlerStartTimer({ timerStore }) {
  const startTimer = () => {
    KeepAwake.keepAwake()
    timerStore.startTimer()
  }

  return startTimer
}
