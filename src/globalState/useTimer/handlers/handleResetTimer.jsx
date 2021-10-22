export default function handleResetTimer({ timerStore }) {
  timerStore.setType('Workout')
  timerStore.stopTimer()
}
