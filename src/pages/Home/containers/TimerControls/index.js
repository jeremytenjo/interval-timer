import Button from '../../../../lib/components/Button'
import useTimer from '../../../../globalState/useTimer'
import BottomBar from '../../../../lib/components/BottomBar'

export default function TimerControls() {
  const timer = useTimer()

  return (
    <BottomBar>
      {!timer.isPlaying && !timer.isStarted && (
        <Button onClick={timer.startTimer}>Start</Button>
      )}

      {timer.isStarted && (
        <>
          {timer.isStarted && timer.isPlaying && (
            <Button onClick={timer.pauseTimer}>Pause</Button>
          )}

          {timer.isStarted && !timer.isPlaying && (
            <Button onClick={timer.resumeTimer}>Resume</Button>
          )}

          <Button onClick={timer.resetTimer}>Stop</Button>
        </>
      )}
    </BottomBar>
  )
}
