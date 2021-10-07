import SettingsActionBarUi from './SettingsActionBarUi'

export default function SettingsActionBar() {
  const onSave = (e) => {
    e.preventDefault()
  }

  return <SettingsActionBarUi onSave={onSave} />
}
