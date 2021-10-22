import Button from '../../../../../lib/components/Button'
import BottomBar from '../../../../../lib/components/BottomBar'

export default function TimerControlsUi({
  isStarted,
  onStartTimer,
  isPlaying,
  onPauseTimer,
  onResumeTimer,
  onStopTimer,
}) {
  return (
    <BottomBar>
      {!isPlaying && !isStarted && <Button onClick={onStartTimer}>Start</Button>}

      {isStarted && (
        <>
          {isStarted && isPlaying && <Button onClick={onPauseTimer}>Pause</Button>}

          {isStarted && !isPlaying && <Button onClick={onResumeTimer}>Resume</Button>}

          <Button onClick={onStopTimer}>Stop</Button>
        </>
      )}
    </BottomBar>
  )
}
