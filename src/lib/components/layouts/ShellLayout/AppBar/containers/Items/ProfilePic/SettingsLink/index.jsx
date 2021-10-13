import SettingsLinkUi from './SettingsLinkUi'

export default function SettingsLink({ onSettingsClick }) {
  const navigate = useNavigate()

  const handleOnSettingsClick = () => {
    onSettingsClick()
    navigate('/settings')
  }

  return <SettingsLinkUi onSettingsClick={handleOnSettingsClick} />
}
