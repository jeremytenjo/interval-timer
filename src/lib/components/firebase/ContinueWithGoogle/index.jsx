import useAuth from '../../../../globalState/useAuth'
import Button from '../../Button'
import GoogleLogo from '../../icons/GoogleLogo'

import * as styles from './styles'

export default function ContinueWithGoogle() {
  const auth = useAuth()

  return (
    <Button
      onClick={auth.signInWithGoogle}
      fullWidth
      sx={styles.wrapper}
      startIcon={<GoogleLogo />}
      text='Continue with Google'
    />
  )
}
