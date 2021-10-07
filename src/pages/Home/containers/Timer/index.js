import useTimer from '../../../../globalState/useTimer'

import TimerUi from './TimerUi'

export default function Timer() {
  const timer = useTimer()

  return (
    <TimerUi
      isStarted={timer.isStarted}
      isPlaying={timer.isPlaying}
      timerKey={timer.timerKey}
      duration={timer.duration}
      color={timer.color}
      restTime={timer.restTime}
      workoutTime={timer.workoutTime}
      type={timer.type}
      onTimerComplete={timer.startNextRepetition}
      onElapsedTimeUpdate={timer.setElapsedTime}
    />
  )
}
