import create from 'zustand'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

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
    authStore.signingIn(true)
    try {
      const auth = getAuth()
      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const accessToken = credential.accessToken
      const user = result.user

      authStore.setUser({ ...user, accessToken })
    } catch (error) {
      snackbar.show({ message: error.message, severity: 'error' })
    } finally {
      authStore.signingIn(false)
    }
  }

  const signOutFromGoogle = async () => {
    const auth = getAuth()
    await signOut(auth)
    authStore.setUser(false)
  }

  useEffect(() => {
    const auth = getAuth()

    const cleanOnAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) authStore.setUser(user)
      else {
        if (user !== null) {
          authStore.setUser(false)
        }
      }
    })

    return () => {
      cleanOnAuthStateChanged()
    }
  }, [])

  return {
    user: authStore.user,
    signingIn: authStore.signingIn,
    error: authStore.error,
    signInWithGoogle,
    signOutFromGoogle,
  }
}
