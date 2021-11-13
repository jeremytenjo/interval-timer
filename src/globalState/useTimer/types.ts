import TimerSchema from '../../data/timers/schema'

type Types = {
  selectedTimer: TimerSchema
  setSelectedTimer: (newValue: any) => void
  totalRepetitions: number
  setTotalRepetitions: (newValue: any) => void
  totalSets: number
  setTotalSets: (newValue: any) => void
  totalWorkoutTime: number
  setTotalWorkoutTime: (newValue: any) => void
  totalRestTime: number
  setTotalRestTime: (newValue: any) => void
  trackedRepetitions: number
  setTrackedRepetitions: (newValue: any) => void
  trackedSets: number
  setTrackedSets: (newValue: any) => void
  type: 'Workout' | 'Rest'
  setType: (newValue: any) => void
  elapsedTime: number
  timeRemainingFormatted: string
  setTimeRimeRemainingFormatted: (newValue: any) => void
  isPlaying: boolean
  isStarted: boolean
  timerKey: number
  startTimer: (newValue: any) => void
  pauseTimer: () => void
  resumeTimer: () => void
  stopTimer: (newValue: any) => void
  restartTimer: (newValue: any) => void
}

export default Types
