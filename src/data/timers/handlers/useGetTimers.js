import { collection, query, where, getDocs } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import create from 'zustand'

import useFirebase from '../../../firebase/useFirebase'
import useShowError from '../../../lib/components/feedback/useShowError'
import useLocalStorage from '../../../lib/utils/storage/useLocalStorage'

const useGetTimersStore = create((set) => ({
  called: false,
  setCalled: (newValue) => set(() => ({ called: newValue })),
}))

export default function useGetTimers({
  userId,
  updateLocalTimers,
  selectedTimer,
  refetch,
}) {
  const getTimersStore = useGetTimersStore()
  const firebase = useFirebase()
  const navigate = useNavigate()
  const localTimers = useLocalStorage({ key: 'timers' })

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
    getFierstoreTimers.error || localTimers.get.error,
    'Error loading timers, please try again',
  )

  useEffect(() => {
    if (!getTimersStore.called) {
      localTimers.get.exec()
    }
  }, [])

  useEffect(() => {
    if ((userId && !getTimersStore.called) || refetch) {
      getFierstoreTimers.exec()
      getTimersStore.setCalled(true)
    }
  }, [userId])

  useEffect(() => {
    if (getFierstoreTimers.result) {
      updateLocalTimers(getFierstoreTimers.result)

      if (!selectedTimer && getFierstoreTimers.result.length) {
        navigate(`/timer/${getFierstoreTimers.result[0].id}`)
      }
    }
  }, [getFierstoreTimers.result])

  return getFierstoreTimers
}
