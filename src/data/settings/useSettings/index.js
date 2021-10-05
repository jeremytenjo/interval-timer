import create from 'zustand'

import useAuth from '../../../globalState/useAuth'

import defaultSettings from './defaultSettings'
import useSaveSettings from './handlers/useSaveSettings'
import useGetSettings from './handlers/useGetSettings'
import useUpdateSetting from './handlers/useUpdateSetting'

const useSettingsStore = create((set) => ({
  settings: defaultSettings,
  setSettings: (newValue) => set(() => ({ settings: newValue })),
}))

export default function useSettings() {
  const settingsStore = useSettingsStore()
  const auth = useAuth()

  const payload = {
    settingsStore,
    userId: auth?.user?.uid,
  }

  useGetSettings(payload)
  const saveSettings = useSaveSettings(payload)
  const updateSetting = useUpdateSetting(payload)

  return {
    saveSettings,
    updateSetting,
  }
}
