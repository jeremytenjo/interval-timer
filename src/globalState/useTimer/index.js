import create from 'zustand'

import useTimerMetadata from './handlers/useTimerMetadata'
import useNextRepetition from './handlers/useNextRepetition'
import handleResetTimer from './handlers/handleResetTimer'
import handleStartTimer from './handlers/handleStartTimer'
import handleStopTimer from './handlers/handleStopTimer'
import useUpdateSelectedTimer from './handlers/useUpdateSelectedTimer'

const useTimerStore = create((set) => ({
  // selected timer
  selectedTimer: false,
  setSelectedTimer: (newValue) => set(() => ({ selectedTimer: newValue })),

  // timer info
  totalRepetitions: 0,
  totalSets: 0,
  totalWorkoutTime: 0,
  totalRestTime: 0,
  trackedRepetitions: 0,
  trackedSets: 0,
  // TODO set to workout and fix
  type: 'Rest',
  elapsedTime: 0,

  setTotalRepetitions: (newValue) => set(() => ({ totalRepetitions: newValue })),
  setTotalSets: (newValue) => set(() => ({ totalSets: newValue })),
  setTotalWorkoutTime: (newValue) => set(() => ({ totalWorkoutTime: newValue })),
  setTotalRestTime: (newValue) => set(() => ({ totalRestTime: newValue })),
  setTrackedRepetitions: (newValue) => set(() => ({ trackedRepetitions: newValue })),
  setTrackedSets: (newValue) => set(() => ({ trackedSets: newValue })),
  setType: (newValue) => set(() => ({ type: newValue })),
  setElapsedTime: (newValue) => set(() => ({ elapsedTime: newValue })),

  // timer controls
  isPlaying: false,
  isStarted: false,
  timerKey: 1,

  startTimer: () => {
    set(() => ({ isPlaying: true, isStarted: true }))
  },
  pauseTimer: () => set(() => ({ isPlaying: false })),
  resumeTimer: () => set(() => ({ isPlaying: true })),
  stopTimer: () => {
    set((state) => ({
      isPlaying: false,
      isStarted: false,
      timerKey: state.timerKey + 1,
    }))
  },
  restartTimer: () =>
    set((state) => {
      state.startTimer()
      return { timerKey: state.timerKey + 1 }
    }),
}))

export default function useTimer() {
  const timerStore = useTimerStore()
  const handlerPayload = {
    timerStore,
  }

  const {
    repetitions,
    sets,
    workoutTime,
    restTime,
    duration,
    color,
    remainingTime,
    totalTime,
  } = useTimerMetadata(handlerPayload)

  const resetTimer = () => handleResetTimer(handlerPayload)

  const startTimer = (payload) => handleStartTimer({ ...handlerPayload, payload })

  const stopTimer = () => handleStopTimer(handlerPayload)

  const startNextRepetition = useNextRepetition({ ...handlerPayload, resetTimer })

  useUpdateSelectedTimer({ ...handlerPayload, resetTimer })

  return {
    repetitions,
    sets,
    workoutTime,
    restTime,
    startNextRepetition,
    duration,
    color,
    resetTimer,
    remainingTime,
    totalTime,
    ...timerStore,
    startTimer,
    stopTimer,
  }
}
