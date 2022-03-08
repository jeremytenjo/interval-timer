import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { FirebaseProvider } from '@useweb/use-firebase'

import firebaseConfig from './config'
import localStorageOptions from './handlers/localStorageOptions/localStorageOptions'

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

const envIsDev = process.env.NODE_ENV === 'development'

export default function Firebase({ children }) {
  return (
    <FirebaseProvider
      firebaseConfig={firebaseConfig}
      envIsDev={envIsDev}
      firebaseApp={firebaseApp}
      auth={auth}
      db={db}
      localStorageOptions={localStorageOptions}
    >
      {children}
    </FirebaseProvider>
  )
}
