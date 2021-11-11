import { Capacitor } from '@capacitor/core'

import useInstallPrompt from '../../../../../../../../../utils/dom/useInstallPrompt'

import InstallWebAppUi from './InstallWebAppUi'

export default function InstallWebApp({ onClick }) {
  const webAppInstallPrompt = useInstallPrompt()
  const showUi = Capacitor.getPlatform() === 'web' && webAppInstallPrompt.isNotInstalled

  const handleOnClick = () => {
    onClick()
    webAppInstallPrompt.prompt()
  }

  return showUi ? <InstallWebAppUi onClick={handleOnClick} /> : null
}
