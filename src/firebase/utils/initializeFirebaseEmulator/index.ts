import { connectFirestoreEmulator } from 'firebase/firestore'
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

import styleEmulatorWarning from './styleEmulatorWarning'

export default function initializeFirebaseEmulator({
  auth,
  db,
  authEmulatorPort = 9005,
  dbEmulatorPort = 9003,
}) {
  if (process.env.NODE_ENV !== 'development') return

  auth && startAuthEmulator({ auth, authEmulatorPort })
  db && startFirestoreEmulator({ db, dbEmulatorPort })
  styleEmulatorWarning()
}

const startAuthEmulator = ({ auth, authEmulatorPort }) => {
  const testUser = {
    username: 'test@gmail.com',
    password: 'testpassword',
  }

  connectAuthEmulator(auth, `http://localhost:${authEmulatorPort}`)

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      createUserWithEmailAndPassword(auth, testUser.username, testUser.password)
        .then(() => {
          signInWithEmailAndPassword(auth, testUser.username, testUser.password)
        })
        .catch(() => {
          signInWithEmailAndPassword(auth, testUser.username, testUser.password)
        })
    }
  })
}

const startFirestoreEmulator = ({ db, dbEmulatorPort }) => {
  connectFirestoreEmulator(db, 'localhost', dbEmulatorPort)
}
