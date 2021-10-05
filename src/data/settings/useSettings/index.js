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

  // TODO add settings, pick wourkout sound, pick rest sound from beep or voice
  const udpateWorkoutSoundSelection = (value) => {
    console.log(value)
  }
  const updateRestSoundSelection = (value) => {
    console.log(value)
  }

  return {
    saveSettings,
    udpateWorkoutSoundSelection,
    updateRestSoundSelection,
  }
}
