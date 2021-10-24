import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import Settings from '../../../../../../../../../icons/Settings'

export default function SettingsLinkUi({ onSettingsClick }) {
  return (
    <ListItemButton onClick={onSettingsClick}>
      <ListItemIcon sx={{ minWidth: '35px', transform: 'translateX(-3px)' }}>
        <Settings sx={{ width: '22px', color: 'white.main' }} />
      </ListItemIcon>
      <ListItemText sx={{ color: 'white.main' }} primary='Settings' />
    </ListItemButton>
  )
}
