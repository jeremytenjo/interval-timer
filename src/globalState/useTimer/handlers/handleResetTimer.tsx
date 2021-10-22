import KeepAwake from '../../../lib/utils/Capacitor/KeepAwake'

export default function handleResetTimer({
  timerStore,
  dontResetSetsAndReps,
  timerNotification,
}) {
  timerStore.setType('Workout')
  KeepAwake.allowSleep()
  timerNotification.removeNotification()

  if (!dontResetSetsAndReps) {
    timerStore.setTrackedSets(timerStore.totalSets)
    timerStore.setTrackedRepetitions(timerStore.totalRepetitions)
  }

  timerStore.stopTimer()
}
