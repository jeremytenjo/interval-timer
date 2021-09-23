import create from 'zustand'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth'

import useFirebase from '../../firebase/useFirebase'
import useSnackBar from '../../lib/components/Snackbar/useSnackbar'

const provider = new GoogleAuthProvider()

const useAuthStore = create((set) => ({
  user: '',
  signingIn: '',
  error: '',

  setUser: (newValue) => set(() => ({ user: newValue })),
  setSigningIn: (newValue) => set(() => ({ signingIn: newValue })),
  setError: (newValue) => set(() => ({ error: newValue })),
}))

export default function useAuth() {
  const authStore = useAuthStore()
  const snackbar = useSnackBar()

  const signInWithGoogle = async () => {
    try {
      const auth = getAuth()
      const result = await signInWithPopup(auth, provider)
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // The signed-in user info.
      const user = result.user
      // ...
      console.log({ user })
      authStore.setUser(user)
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
      console.log({ error })
      snackbar.show({ message: error })
    }
  }
  const signOutFromGoogle = () => {}

  useEffect(() => {
    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {
      if (user) authStore.setUser(user)
      else {
        if (user !== null) {
          authStore.setUser(false)
        }
      }
    })
  }, [])

  return {
    user: authStore.user,
    signingIn: authStore.signingIn,
    error: authStore.error,
    signInWithGoogle,
    signOutFromGoogle,
  }
}
