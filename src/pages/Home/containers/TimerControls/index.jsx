import useTimer from '../../../../globalState/useTimer'

import TimerControlsUi from './TimerControlsUi'

export default function TimerControls() {
  const timer = useTimer()

  return (
    <TimerControlsUi
      isStarted={timer.isStarted}
      isPlaying={timer.isPlaying}
      onStartTimer={timer.startTimer}
      onPauseTimer={timer.pauseTimer}
      onResumeTimer={timer.resumeTimer}
      onStopTimer={timer.stopTimer}
    />
  )
}
