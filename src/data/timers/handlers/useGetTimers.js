import { collection, query, where, getDocs } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import create from 'zustand'

import useFirebase from '../../../firebase/useFirebase'
import useShowError from '../../../lib/components/feedback/useShowError'

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

  const fetcher = async () => {
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

  const getTimers = useAsync(fetcher)

  useShowError(getTimers.error, 'Error loading timers, please try again')

  useEffect(() => {
    if ((userId && !getTimersStore.called) || refetch) {
      getTimers.exec()
      getTimersStore.setCalled(true)
    }
  }, [userId])

  useEffect(() => {
    if (getTimers.result) {
      updateLocalTimers(getTimers.result)

      if (!selectedTimer && getTimers.result.length) {
        navigate(`/timer/${getTimers.result[0].id}`)
      }
    }
  }, [getTimers.result])

  return getTimers
}
