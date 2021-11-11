import Settings from '../../../../../../../../../icons/Settings'
import ListItem from '../../_common/ListItem'

export default function SettingsLinkUi({ onSettingsClick }) {
  return <ListItem label='Settings' Icon={Settings} onClick={onSettingsClick} />
}
