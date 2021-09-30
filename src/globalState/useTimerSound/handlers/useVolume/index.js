import create from 'zustand'

import useLocalStorage from '../../../../lib/utils/storage/useLocalStorage'

const useVolumeStore = create((set) => ({
  volume: 50,
  setVolume: (newValue) => set(() => ({ volume: newValue })),
}))

export default function useVolume() {
  const volumeStore = useVolumeStore()
  const localStorageVolume = useLocalStorage({ action: 'get', key: 'volume' })
  const isMuted = useVolumeStore.volume === 0
  const volumeInDecimals = volumeStore.volume / 100

  useEffect(() => {
    console.log(localStorageVolume.exec())
  }, [])

  return {
    isMuted,
    volumeInDecimals,
    volume: volumeStore.volume,
    updateVolume: volumeStore.setVolume,
  }
}
