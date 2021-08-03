import { doc, setDoc } from 'firebase/firestore'

import useFirebase from '../../firebase/firebase'

export default function useTimers() {
  const firebase = useFirebase()
  // const timers = useData(
  //   ['timers', 'timerId'],
  //   firestoreGet(firestore.collection('timers').where('capital', '==', true)),
  //   { initialData: [] },
  // )
  const timers = []

  useEffect(() => {
    get()
  }, [])

  const get = async () => {
    await setDoc(doc(firebase.db, 'cities', 'LA'), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    })
  }

  return timers
}
