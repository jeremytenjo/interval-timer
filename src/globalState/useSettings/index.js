import create from 'zustand'

const useSettingsStore = create((set) => ({
  example: true,

  setExample: (newValue) => set(() => ({ example: newValue })),
}))

export default function useSettings() {
  const settingsStore = useSettingsStore()

  const updateExample = (newValue) => {
    settingsStore.setExample(newValue)
  }

  return {
    updateExample,
  }
}
