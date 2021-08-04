import React, { createContext, useContext, useMemo } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import firebaseConfig from './config'
import initializeEmulator from './initializeEmulator'

export const FirebaseContext = createContext(null)

export const FirebaseProvider = ({ children }) => {
  const firebaseApp = useMemo(() => initializeApp(firebaseConfig), [])
  const auth = useMemo(() => getAuth(), [])
  const db = useMemo(() => getFirestore(), [])

  useMemo(() => {
    initializeEmulator({ auth, db })
  }, [])

  return (
    <FirebaseContext.Provider
      value={{
        firebaseApp,
        auth,
        db,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

/**
 * @returns {{
 * firebaseApp
 * auth
 * db
 * }}
 */
const useFirebase = () => useContext(FirebaseContext)

export default useFirebase
