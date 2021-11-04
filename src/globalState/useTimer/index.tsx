import create from 'zustand'

import useTimerMetadata from './handlers/useTimerMetadata'
import useNextRepetition from './handlers/useNextRepetition'
import useHandleResetTimer from './handlers/useHandleResetTimer'
import useHandlerStartTimer from './handlers/useHandlerStartTimer'
import useUpdateSelectedTimer from './handlers/useUpdateSelectedTimer'
import useTimerSound from './handlers/useSound'
import useHandleTimerNotification from './handlers/useHandleTimerNotification'
import useUpdateElapsedTime from './handlers/useUpdateElapsedTime'

const useTimerStore = create((set: any) => ({
  // selected timer
  selectedTimer: false,
  setSelectedTimer: (newValue) => set(() => ({ selectedTimer: newValue })),

  // timer info
  totalRepetitions: 0,
  setTotalRepetitions: (newValue) => set(() => ({ totalRepetitions: newValue })),

  totalSets: 0,
  setTotalSets: (newValue) => set(() => ({ totalSets: newValue })),

  totalWorkoutTime: 0,
  setTotalWorkoutTime: (newValue) => set(() => ({ totalWorkoutTime: newValue })),

  totalRestTime: 0,
  setTotalRestTime: (newValue) => set(() => ({ totalRestTime: newValue })),

  trackedRepetitions: 0,
  setTrackedRepetitions: (newValue) => set(() => ({ trackedRepetitions: newValue })),

  trackedSets: 0,
  setTrackedSets: (newValue) => set(() => ({ trackedSets: newValue })),

  type: 'Rest',
  setType: (newValue) => set(() => ({ type: newValue })),

  elapsedTime: 0,
  setElapsedTime: (newValue) => set(() => ({ elapsedTime: newValue })),

  timeRemainingFormatted: '00:00',
  setTimeRimeRemainingFormatted: (newValue) =>
    set(() => ({ timeRemainingFormatted: newValue })),

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

  const resetTimer = useHandleResetTimer({
    ...handlerPayload,
  })

  const startTimer = useHandlerStartTimer({ ...handlerPayload })

  const startNextRepetition = useNextRepetition({ ...handlerPayload, resetTimer })

  const udpateSelectedtimer = useUpdateSelectedTimer({ ...handlerPayload, resetTimer })

  const sound = useTimerSound()

  const { updateElapsedTime } = useUpdateElapsedTime({
    ...handlerPayload,
    udpateTimeRemainingFormatted: timerStore.setTimeRimeRemainingFormatted,
  })

  useHandleTimerNotification({
    resetTimer,
    resumeTimer: timerStore.resumeTimer,
    pauseTimer: timerStore.pauseTimer,
    timerIsPlaying: timerStore.isPlaying,
    timerIsStarted: timerStore.isStarted,
    timeRemainingInType: timerStore.timeRemainingFormatted,
    workoutType: timerStore.type,
  })

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
    sound,
    startTimer,
    setSelectedTimer: udpateSelectedtimer.setSelectedTimer,
    setSelectedTimerById: udpateSelectedtimer.setSelectedTimerById,
    updateElapsedTime,
  }
}
