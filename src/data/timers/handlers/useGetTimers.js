import { collection, query, where, getDocs } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import create from 'zustand'

import useFirebase from '../../../firebase/useFirebase'
import useShowError from '../../../lib/components/feedback/useShowError'
import useLocalStorage from '../../../lib/utils/storage/useLocalStorage'

const useGetTimersStore = create((set) => ({
  firestoreCalled: false,
  setFirestoreCalled: (newValue) => set(() => ({ firestoreCalled: newValue })),

  localStorageCalled: false,
  setLocalStorageCalled: (newValue) => set(() => ({ localStorageCalled: newValue })),
}))

export default function useGetTimers({
  userId,
  updateLocalTimers,
  selectedTimer,
  refetch,
  navigateToLoadedTimerOnLoad,
}) {
  const getTimersStore = useGetTimersStore()
  const firebase = useFirebase()
  const navigate = useNavigate()
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
  useEffect(() => {
    if (!getTimersStore.localStorageCalled) {
      getLocalTimers.exec()
      getTimersStore.setLocalStorageCalled(true)
    }
  }, [])

  useEffect(() => {
    if (getLocalTimers.result) {
      updateLocalTimers(getLocalTimers.result)

      if (!selectedTimer && getLocalTimers.result.length && navigateToLoadedTimerOnLoad) {
        navigate(`/timer/${getLocalTimers.result[0].id}`)
      }
    }
  }, [getLocalTimers.result])

  // Firestore Storage
  useEffect(() => {
    if ((userId && !getTimersStore.firestoreCalled) || refetch) {
      getFierstoreTimers.exec()
      getTimersStore.setFirestoreCalled(true)
    }
  }, [userId])

  useEffect(() => {
    if (getFierstoreTimers.result) {
      updateLocalTimers(getFierstoreTimers.result)

      if (
        !selectedTimer &&
        getFierstoreTimers.result.length &&
        navigateToLoadedTimerOnLoad
      ) {
        navigate(`/timer/${getFierstoreTimers.result[0].id}`)
      }
    }
  }, [getFierstoreTimers.result])
}
