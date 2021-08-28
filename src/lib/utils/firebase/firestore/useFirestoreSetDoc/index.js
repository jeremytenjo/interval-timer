import { doc as firestoreDoc, setDoc as firestoreSetDoc } from 'firebase/firestore'

import useFirebase from '../../../../../firebase/useFirebase'

export default function useFirestoreSetDoc({ collection, doc, data }) {
  const firebase = useFirebase()

  const fetcher = async () => {
    return await firestoreSetDoc(firestoreDoc(firebase.db, collection, doc), data)
  }

  const hookData = useAsync(fetcher)

  return hookData
}
