import { createContext, useContext, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import firebaseConfig from './config'
import initializeFirebaseEmulator from './utils/initializeFirebaseEmulator'

console.log(import.meta.env)

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

initializeFirebaseEmulator({ auth, db })

const FirebaseContext = createContext(null)

// TODO extract to npm package
export const FirebaseProvider = ({ children, enableAuth = true }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (enableAuth) {
      const cleanOnAuthStateChanged = onAuthStateChanged(auth, (user) => {
        if (user) setUser(user)
        if (user !== null) {
          setUser(false)
        }
      })

      return () => {
        cleanOnAuthStateChanged()
      }
    }
  }, [])

  return (
    <FirebaseContext.Provider
      value={{
        firebaseApp,
        auth,
        db,
        user,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

type Return = {
  firebaseApp: any
  auth: any
  db: any
  user: any
}

const useFirebase = () => useContext<Return>(FirebaseContext)

export default useFirebase
