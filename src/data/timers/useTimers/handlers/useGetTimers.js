import { collection, query, where, getDocs } from 'firebase/firestore'
import create from 'zustand'

import useFirebase from '../../../../firebase/useFirebase'
import useGetData from '../../../../lib/utils/data/useGetData'

const useGetTimersStore = create((set) => ({
  firestoreCalled: false,
  setFirestoreCalled: (newValue) => set(() => ({ firestoreCalled: newValue })),

  localStorageCalled: false,
  setLocalStorageCalled: (newValue) => set(() => ({ localStorageCalled: newValue })),
}))

export default function useGetTimers({ userId, updateLocalTimers }) {
  const getTimersStore = useGetTimersStore()
  const firebase = useFirebase()

  const firestoreFetcher = async () => {
    const data = []
    const q = query(collection(firebase.db, 'timers'), where('userId', '==', userId))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return data
  }

  useGetData({
    userId,
    firestoreFetcher,
    key: 'timers',
    updateData: updateLocalTimers,
    firestoreCalled: getTimersStore.firestoreCalled,
    setFirestoreCalled: getTimersStore.setFirestoreCalled,
    localStorageCalled: getTimersStore.localStorageCalled,
    setLocalStorageCalled: getTimersStore.setLocalStorageCalled,
  })
}
