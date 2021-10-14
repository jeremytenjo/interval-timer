export default function handleResetTimer({ timerStore }) {
  timerStore.setType('Workout')
  timerStore.setTrackedRepetitions(timerStore.totalRepetitions)
  timerStore.setTrackedSets(timerStore.totalSets)
  timerStore.stopTimer()
}
