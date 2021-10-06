import KeepAwake from '../../../lib/utils/Capacitor/KeepAwake'

import useTimerSound from './useSound'

export default function useNextRepetition({ timerStore, resetTimer }) {
  const timerSound = useTimerSound()

  const nextRepetition = () => {
    KeepAwake.keepAwake()
    const nextType = timerStore.type === 'Rest' ? 'Workout' : 'Rest'
    const nextRepetition = timerStore.trackedRepetitions - 1
    const nextSet = timerStore.trackedSets - 1

    // On rest start
    if (nextType === 'Rest') {
      timerSound.playRestSound()
      timerStore.setType(nextType)
      timerStore.restartTimer()
    }

    // On workout start
    if (nextType === 'Workout') {
      const hasMoreRepetitions = nextRepetition !== 0
      const noMoreRepetitions = nextRepetition === 0
      const noMoreSets = nextSet === 0
      const isFinished = noMoreRepetitions && noMoreSets
      const isLastSet = nextSet === 1

      if (isFinished) {
        resetTimer()
        return
      }

      timerSound.playWorkoutSound()

      if (hasMoreRepetitions) {
        timerStore.setTrackedRepetitions(nextRepetition)
        timerStore.setType(nextType)
        timerStore.restartTimer()
      }

      if (noMoreRepetitions && isLastSet) {
        timerStore.setTrackedRepetitions(timerStore.totalRepetitions)
        timerStore.setTrackedSets(nextSet)
        timerStore.restartTimer()
      }
    }
  }

  return nextRepetition
}
