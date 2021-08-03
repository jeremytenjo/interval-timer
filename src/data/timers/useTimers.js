import { doc as firestoreDoc, setDoc as firestoreSetDoc } from 'firebase/firestore'

import useFirebase from '../../firebase/firebase'

export default function useTimers() {
  // const timers = useData(
  //   ['timers', 'timerId'],
  //   firestoreGet(firestore.collection('timers').where('capital', '==', true)),
  //   { initialData: [] },
  // )
  const timers = []

  const fsetdoc = useFirestoreSetDoc({
    collection: 'cities',
    doc: 'LA',
    data: {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    },
  })

  useEffect(() => {
    fsetdoc.exec()
  }, [])

  return timers
}

function useFirestoreSetDoc({ collection, doc, data }) {
  const firebase = useFirebase()

  const fetcher = async () => {
    return await firestoreSetDoc(firestoreDoc(firebase.db, collection, doc), data)
  }

  const hookData = useAsync(fetcher)

  return hookData
}
