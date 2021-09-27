export default function handleNextRepetition({ timerStore, resetTimer }) {
  const nextType = timerStore.type === 'Rest' ? 'Workout' : 'Rest'
  const nextRepetition = timerStore.trackedRepetitions - 1
  const nextSet = timerStore.trackedSets - 1

  // On rest start
  if (nextType === 'Rest') {
    timerStore.setType(nextType)
    timerStore.restartTimer()
  }

  // On workout start
  if (nextType === 'Workout') {
    // if no more reps or sets
    if (nextRepetition === 0 && nextSet === 0) {
      resetTimer()
      return
    }

    if (nextRepetition !== 0) {
      // if has more repetitions
      timerStore.setTrackedRepetitions(nextRepetition)
      timerStore.setType(nextType)
      timerStore.restartTimer()
    }

    // if no more repetitions
    if (nextRepetition === 0 && nextSet === 1) {
      timerStore.setTrackedRepetitions(timerStore.totalRepetitions)
      timerStore.setTrackedSets(nextSet)
      timerStore.restartTimer()
    }
  }
}
