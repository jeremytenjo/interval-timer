import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'
import useTimerNotification from '../../../../lib/utils/feedback/TimerNotification/useTimerNotification/useTimerNotification'
import TimerStoreTypes from '../../types'

type Props = {
  timerStore: TimerStoreTypes
}

export default function useHandleResetTimer({ timerStore }: Props) {
  const timerNotification = useTimerNotification({})

  const resetTimer = ({ dontResetSetsAndReps = false } = {}) => {
    timerStore.setType('Workout')
    KeepAwake.allowSleep()
    timerNotification.removeNotification.exec()

    if (!dontResetSetsAndReps) {
      timerStore.setTrackedSets(timerStore.totalSets)
      timerStore.setTrackedRepetitions(timerStore.totalRepetitions)
    }

    timerStore.stopTimer()
  }

  return resetTimer
}
