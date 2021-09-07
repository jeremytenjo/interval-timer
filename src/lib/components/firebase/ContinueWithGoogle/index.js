import Button from '../../Button'
import GoogleLogo from '../../icons/GoogleLogo'

import * as styles from './styles'

export default function ContinueWithGoogle() {
  return (
    <Button fullWidth sx={styles.wrapper} startIcon={<GoogleLogo />}>
      Continue with Google
    </Button>
  )
}
