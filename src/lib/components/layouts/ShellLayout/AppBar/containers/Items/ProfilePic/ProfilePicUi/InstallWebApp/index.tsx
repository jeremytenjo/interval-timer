import useInstallPrompt from '../../../../../../../../../utils/dom/useInstallPrompt'

import InstallWebAppUi from './InstallWebAppUi'

export default function InstallWebApp({ onClick }) {
  const webAppInstallPrompt = useInstallPrompt()

  const handleOnClick = () => {
    onClick()
    webAppInstallPrompt.prompt()
  }

  return webAppInstallPrompt.isNotInstalled ? (
    <InstallWebAppUi onClick={handleOnClick} />
  ) : null
}
