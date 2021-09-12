import create from 'zustand'

const useElapsedTime = create((set) => ({
  elapsedTime: 0,

  setElapsedTime: ({ newValue }) => set(() => ({ elapsedTime: newValue })),
}))

export default useElapsedTime
