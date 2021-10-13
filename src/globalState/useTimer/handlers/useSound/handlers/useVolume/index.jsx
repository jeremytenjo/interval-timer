import create from 'zustand'
import useOnTrue from '@useweb/use-on-true'

import useLocalStorage from '../../../../../../lib/utils/storage/useLocalStorage'
import { useEffect } from 'react'

const useVolumeStore = create((set) => ({
  volume: 50,
  setVolume: (newValue) => set(() => ({ volume: newValue })),

  fetchedLocalVolume: false,
  setFetchedLocalVolume: (newValue) => set(() => ({ fetchedLocalVolume: newValue })),
}))

export default function useVolume() {
  const volumeStore = useVolumeStore()
  const localStorageKey = 'volume'
  const getLocalStorageVolume = useLocalStorage({ action: 'get', key: localStorageKey })
  const setLocalStorageVolume = useLocalStorage({ action: 'set', key: localStorageKey })
  const volumeInDecimals = volumeStore.volume / 100
  const isMuted = volumeStore.volume === 0

  useEffect(() => {
    if (!volumeStore.fetchedLocalVolume) {
      getLocalStorageVolume.exec()
      volumeStore.setFetchedLocalVolume(true)
    }
  }, [])

  const updateVolume = (newValue) => {
    setLocalStorageVolume.exec({ value: newValue })
    volumeStore.setVolume(newValue)
  }

  useOnTrue(typeof getLocalStorageVolume.result === 'number', () => {
    updateVolume(getLocalStorageVolume.result)
  })

  return {
    isMuted,
    volumeInDecimals,
    volume: volumeStore.volume,
    updateVolume,
  }
}
