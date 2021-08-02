import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/functions'

import firebaseConfig from './config'
import initializeEmulator from './initializeEmulator'

firebase.initializeApp(firebaseConfig)

initializeEmulator(firebase)
