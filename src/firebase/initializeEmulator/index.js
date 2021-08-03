import { connectFirestoreEmulator } from 'firebase/firestore'
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

import styleEmulatorWarning from './styleEmulatorWarning'

export default function initializeEmulator({ auth, db }) {
  if (process.env.NODE_ENV === 'development') {
    startAuthEmulator(auth)
    startFirestoreEmulator(db)
    styleEmulatorWarning()
  }
}

const startAuthEmulator = (auth) => {
  const testUser = {
    username: 'test@gmail.com',
    password: 'testpassword',
  }

  connectAuthEmulator(auth, 'http://localhost:9005')

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      createUserWithEmailAndPassword(auth, testUser.username, testUser.password).then(
        () => {
          signInWithEmailAndPassword(auth, testUser.username, testUser.password)
        },
      )
    }
  })
}

const startFirestoreEmulator = (db) => {
  connectFirestoreEmulator(db, 'localhost', 9003)
}
