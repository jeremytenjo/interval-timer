import KeepAwake from '../../../lib/utils/Capacitor/KeepAwake'

import useTimerSound from './useSound'

export default function useNextRepetition({ timerStore, resetTimer }) {
  const timerSound = useTimerSound()

  const nextRepetition = () => {
    KeepAwake.keepAwake()
    const nextType = timerStore.type === 'Rest' ? 'Workout' : 'Rest'

    // On rest start
    if (nextType === 'Rest') {
      timerSound.playRestSound()
      timerStore.setType(nextType)
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

      const noMoreRepetitions = timerStore.trackedRepetitions - 1 === 0
      const hasMoreRepetitions = !noMoreRepetitions
      const noMoreSets = timerStore.trackedSets - 1 === 0
      const hasMoreSets = !noMoreSets

      if (noMoreRepetitions && noMoreSets) {
        resetTimer()
        return
      }

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
