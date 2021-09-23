import { collection, query, where, getDocs } from 'firebase/firestore'
import useAsync from '@useweb/use-async'

import useFirebase from '../../../firebase/useFirebase'

export default function useGetTimers({ userId, updateLocalTimers, selectedTimer }) {
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

  useEffect(() => {
    if (userId) {
      getTimers.exec()
    }
  }, [userId])

  useEffect(() => {
    if (getTimers.result) {
      updateLocalTimers(getTimers.result)

      if (!selectedTimer && getTimers.length) {
        navigate(`/timer/${getTimers.result[0].id}`)
      }
    }
  }, [getTimers.result])

  return getTimers
}
