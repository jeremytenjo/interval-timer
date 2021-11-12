import { useEffect } from 'react'
import create from 'zustand'
import useOnTrue from '@useweb/use-on-true'

import useLocalStorage from '../../../../../../lib/utils/storage/useLocalStorage'

type Types = {
  volume: number
  setVolume: (newValue: number) => void
  fetchedLocalVolume: false
  setFetchedLocalVolume: (newValue: any) => void
}

const useVolumeStore = create<Types>((set) => ({
  volume: 50,
  setVolume: (newValue) => set(() => ({ volume: newValue })),

  fetchedLocalVolume: false,
  setFetchedLocalVolume: (newValue) => set(() => ({ fetchedLocalVolume: newValue })),
}))

export default function useVolume() {
  const volumeStore = useVolumeStore()
  const localStorageVolume = useLocalStorage('volume')
  const volumeInDecimals = volumeStore.volume / 100
  const isMuted = volumeStore.volume === 0

  useEffect(() => {
    if (!volumeStore.fetchedLocalVolume) {
      volumeStore.setFetchedLocalVolume(true)
    }
  }, [])

  const updateVolume = (newValue) => {
    localStorageVolume.update(newValue)
    volumeStore.setVolume(newValue)
  }

  useOnTrue(typeof localStorageVolume.data === 'number', () => {
    updateVolume(localStorageVolume.data)
  })

  return {
    isMuted,
    volumeInDecimals,
    volume: volumeStore.volume,
    updateVolume,
  }
}
