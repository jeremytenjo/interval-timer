import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import useFirebaseAuth, { type UseFirebaseAuthProps } from '@useweb/use-firebase-auth'

import useShowError from '../../lib/components/feedback/useShowError'
import gtag from '../../lib/utils/analytics/gtag'

const provider = new GoogleAuthProvider()

type UseAuthProps = {
  onSignOut?: UseFirebaseAuthProps['onSignOut']
  onSignIn?: UseFirebaseAuthProps['onSignIn']
  onSignInError?: UseFirebaseAuthProps['onSignInError']
}

export default function useAuth(
  props: UseAuthProps = {
    onSignOut: undefined,
    onSignIn: undefined,
    onSignInError: undefined,
  },
) {
  const showError = useShowError()

  const signInWithGoogle = useFirebaseAuth({
    auth: getAuth(),
    signInFetcher: async () => {
      const auth = getAuth()
      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const accessToken = credential.accessToken
      const user = result.user

      return { ...user, accessToken }
    },

    onSignIn: () => {
      gtag('event', 'login', {
        method: 'Google',
      })
    },
    onSignInError: (error) => {
      if (error.code !== 'auth/popup-closed-by-user') {
        showError.show({ error, message: 'Error signing in, please try again.' })
      }
    },
    onSignOut: () => {
      props.onSignOut && props.onSignOut()
    },
  })

  return {
    user: signInWithGoogle.user,
    signInWithGoogle: signInWithGoogle.signIn.exec,
    signingIn: signInWithGoogle.signIn.loading,
    error: signInWithGoogle.signIn.error,
    signOutFromGoogle: signInWithGoogle.signOut,
  }
}
