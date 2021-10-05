import { collection, query, where, getDocs } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import create from 'zustand'
import useOnTrue from '@useweb/use-on-true'

import useFirebase from '../../../../firebase/useFirebase'
import useShowError from '../../../../lib/components/feedback/useShowError'
import useLocalStorage from '../../../../lib/utils/storage/useLocalStorage'

const useGetTimersStore = create((set) => ({
  firestoreCalled: false,
  setFirestoreCalled: (newValue) => set(() => ({ firestoreCalled: newValue })),

  localStorageCalled: false,
  setLocalStorageCalled: (newValue) => set(() => ({ localStorageCalled: newValue })),
}))

export default function useGetTimers({ userId, updateLocalTimers }) {
  const getTimersStore = useGetTimersStore()
  const firebase = useFirebase()
  const getLocalTimers = useLocalStorage({ action: 'get', key: 'timers' })

  const getFierstoreTimers = useAsync(async () => {
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
  })

  useShowError(
    getFierstoreTimers.error || getLocalTimers.error,
    'Error loading timers, please try again',
  )

  // Local Storage
  useOnTrue(
    userId && !getTimersStore.localStorageCalled && !getTimersStore.firestoreCalled,
    () => {
      getLocalTimers.exec()
      getTimersStore.setLocalStorageCalled(true)
    },
  )

  useOnTrue(getLocalTimers.result, () => {
    updateLocalTimers(getLocalTimers.result)
  })

  // Firestore Storage
  useOnTrue(userId && !getTimersStore.firestoreCalled, () => {
    getFierstoreTimers.exec()
    getTimersStore.setFirestoreCalled(true)
  })

  useOnTrue(getFierstoreTimers.result, () => {
    updateLocalTimers(getFierstoreTimers.result)
  })
}
