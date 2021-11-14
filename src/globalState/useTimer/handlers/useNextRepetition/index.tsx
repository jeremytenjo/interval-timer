import KeepAwake from '../../../../lib/utils/Capacitor/KeepAwake'
import useTimerSound from '../useSound'
import TimerStoreTypes from '../../types'

type Props = {
  timerStore: TimerStoreTypes
  resetTimer?: () => void
}

export default function useNextRepetition({ timerStore, resetTimer }: Props) {
  const timerSound = useTimerSound()

  const nextRepetition = () => {
    KeepAwake.keepAwake()
    const nextType = timerStore.type === 'Rest' ? 'Workout' : 'Rest'
    const noMoreRepetitions = timerStore.trackedRepetitions - 1 === 0
    const noMoreSets = timerStore.trackedSets - 1 === 0

    // On rest start
    if (nextType === 'Rest') {
      timerSound.playRestSound()
      timerStore.setType(nextType)

      if (noMoreRepetitions && noMoreSets) {
        resetTimer()
        return
      }

      timerStore.restartTimer()
    }

    // On workout start
    if (nextType === 'Workout') {
      const nextRepetition =
        timerStore.trackedRepetitions - 1 === 0
          ? timerStore.totalRepetitions
          : timerStore.trackedRepetitions - 1
      const nextSet =
        timerStore.trackedSets - 1 === 0
          ? timerStore.totalSets
          : timerStore.trackedSets - 1

      const hasMoreRepetitions = !noMoreRepetitions
      const hasMoreSets = !noMoreSets

      timerSound.playWorkoutSound()

      if (hasMoreRepetitions && hasMoreSets) {
        timerStore.setTrackedSets(nextSet)
        timerStore.restartTimer()
      }

      if (noMoreRepetitions && hasMoreSets) {
        timerStore.setTrackedSets(nextSet)
      }

      if (hasMoreRepetitions && noMoreSets) {
        timerStore.setTrackedSets(timerStore.totalSets)
      }

      if (noMoreSets) {
        timerStore.setTrackedRepetitions(nextRepetition)
      }

      timerStore.setType(nextType)
      timerStore.restartTimer()
    }
  }

  return nextRepetition
}
