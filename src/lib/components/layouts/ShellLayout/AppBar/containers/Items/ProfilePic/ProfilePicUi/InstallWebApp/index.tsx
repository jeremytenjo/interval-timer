import useInstallPrompt from '../../../../../../../../../utils/dom/useInstallPrompt'

import InstallWebAppUi from './InstallWebAppUi'

export default function InstallWebApp({ onClick }) {
  const webAppInstallPrompt = useInstallPrompt()

  const handleOnClick = () => {
    onClick()
    webAppInstallPrompt.prompt()
  }

  return !webAppInstallPrompt.isInstalled ? (
    <InstallWebAppUi onClick={handleOnClick} />
  ) : null
}
