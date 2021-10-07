import useTimer from '../../../../globalState/useTimer'

import TimerControlsUi from './TimerControlsUi'

export default function TimerControls() {
  const timer = useTimer()

  return (
    <TimerControlsUi
      isStarted={timer.isStarted}
      startTimer={timer.startTimer}
      isPlaying={timer.isPlaying}
      pauseTimer={timer.pauseTimer}
      resumeTimer={timer.resumeTimer}
      resetTimer={timer.resetTimer}
    />
  )
}
