import Button from '../../../../../lib/components/Button'
import BottomBar from '../../../../../lib/components/BottomBar'

export default function TimerControlsUi({
  isStarted,
  startTimer,
  isPlaying,
  pauseTimer,
  resumeTimer,
  resetTimer,
}) {
  return (
    <BottomBar>
      {!isPlaying && !isStarted && <Button onClick={startTimer}>Start</Button>}

      {isStarted && (
        <>
          {isStarted && isPlaying && <Button onClick={pauseTimer}>Pause</Button>}

          {isStarted && !isPlaying && <Button onClick={resumeTimer}>Resume</Button>}

          <Button onClick={resetTimer}>Stop</Button>
        </>
      )}
    </BottomBar>
  )
}
