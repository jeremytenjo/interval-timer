import React, { createContext, useContext } from 'react'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

import initializeEmulator from './utils/initializeEmulator'
import firebaseConfig from './config'

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

initializeEmulator({ auth, db })

export const FirebaseContext = createContext(null)

export const FirebaseProvider = ({ children }) => {
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
