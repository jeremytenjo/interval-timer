import { useEffect } from 'react'
import create from 'zustand'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

import useShowError from '../../lib/components/feedback/useShowError'
import gtag from '../../lib/utils/analytics/gtag'

const provider = new GoogleAuthProvider()

type Types = {
  user: any
  setUser: (newValue: any) => void
  signingIn: boolean
  setSigningIn: (newValue: boolean) => void
  error: any
  setError: (newValue: any) => void
  checked: boolean
  setChecked: (newValue: boolean) => void
}

const useAuthStore = create<Types>((set) => ({
  user: undefined,
  setUser: (newValue) => set(() => ({ user: newValue })),

  signingIn: undefined,
  setSigningIn: (newValue) => set(() => ({ signingIn: newValue })),

  error: undefined,
  setError: (newValue) => set(() => ({ error: newValue })),

  checked: false,
  setChecked: (newValue) => set(() => ({ checked: newValue })),
}))

export default function useAuth() {
  const authStore = useAuthStore()
  const showError = useShowError()

  const signInWithGoogle = async () => {
    authStore.setChecked(true)
    authStore.setSigningIn(true)
    authStore.setError(false)

    try {
      const auth = getAuth()
      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const accessToken = credential.accessToken
      const user = result.user

      gtag('event', 'login', {
        method: 'Google',
      })
      authStore.setUser({ ...user, accessToken })
    } catch (error) {
      if (error.code !== 'auth/popup-closed-by-user') {
        showError.show({ error, message: 'Error signing in, please try again.' })
        authStore.setError(error)
      }
    } finally {
      authStore.setSigningIn(false)
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
    checked: authStore.checked,
    signInWithGoogle,
    signOutFromGoogle,
  }
}
