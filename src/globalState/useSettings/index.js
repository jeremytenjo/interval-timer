import create from 'zustand'

import useSaveSettings from './handlers/useSaveSettings'

const useSettingsStore = create((set) => ({
  example: true,

  setExample: (newValue) => set(() => ({ example: newValue })),
}))

export default function useSettings() {
  const settingsStore = useSettingsStore()

  const payload = {
    settingsStore,
  }

  const saveSettings = useSaveSettings(payload)

  return {
    saveSettings,
  }
}
