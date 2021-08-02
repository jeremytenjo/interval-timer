import styleEmulatorWarning from './styleEmulatorWarning'

export default function initializeEmulator(firebase) {
  if (process.env.NODE_ENV === 'development') {
    firebase.auth().useEmulator('http://localhost:9005/')
    firebase.firestore().useEmulator('localhost', 9003)
    styleEmulatorWarning()
  }
}
