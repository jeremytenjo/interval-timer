import useSettings from '../../../../data/settings/useSettings'

import SettingsActionBarUi from './SettingsActionBarUi'

export default function SettingsActionBar() {
  const settings = useSettings()

  return <SettingsActionBarUi onSave={settings.saveSettings.exec} />
}
