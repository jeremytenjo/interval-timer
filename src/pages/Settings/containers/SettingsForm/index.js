import SettingsFormUi from './SettingsFormUi'

export default function SettingsForm() {
  const handleSumbition = (submttedData) => {
    console.log({ submttedData })
  }

  return <SettingsFormUi onSubmit={handleSumbition} />
}
