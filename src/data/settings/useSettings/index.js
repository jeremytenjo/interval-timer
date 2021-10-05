import create from 'zustand'

import defaultSettings from './defaultSettings'
import useSaveSettings from './handlers/useSaveSettings'
import useFetchSettings from './handlers/useFetchSettings'
import useUpdateSetting from './handlers/useUpdateSetting'

const useSettingsStore = create((set) => ({
  settings: defaultSettings,
  setSettings: (newValue) => set(() => ({ settings: newValue })),
}))

export default function useSettings() {
  const settingsStore = useSettingsStore()

  const payload = {
    settingsStore,
  }

  const saveSettings = useSaveSettings(payload)
  const fetchSettings = useFetchSettings(payload)
  const updateSetting = useUpdateSetting(payload)

  return {
    saveSettings,
    fetchSettings,
    updateSetting,
  }
}
