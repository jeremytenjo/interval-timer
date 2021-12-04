import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { FirebaseProvider, initializeFirebaseEmulator } from '@useweb/use-firebase'

import firebaseConfig from './config'
import localStorageOptions from './handlers/localStorageOptions/localStorageOptions'

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

// TODO fix initializeFirebaseEmulator, it is not starting
initializeFirebaseEmulator({ auth, db })

export default function Firebase({ children }) {
  return (
    <FirebaseProvider
      firebaseApp={firebaseApp}
      auth={auth}
      db={db}
      localStorageOptions={localStorageOptions}
    >
      {children}
    </FirebaseProvider>
  )
}
