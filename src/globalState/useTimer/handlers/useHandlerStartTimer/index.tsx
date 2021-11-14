import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'
import TimerStoreTypes from '../../types'

type Props = {
  timerStore: TimerStoreTypes
}

export default function useHandlerStartTimer({ timerStore }: Props) {
  const startTimer = () => {
    KeepAwake.keepAwake()
    timerStore.startTimer()
  }

  return startTimer
}
