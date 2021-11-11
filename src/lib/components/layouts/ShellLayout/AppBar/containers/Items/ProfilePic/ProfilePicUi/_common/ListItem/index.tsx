import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

export default function ListItem({ onClick, Icon, label }) {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemIcon sx={{ minWidth: '35px', transform: 'translateX(-3px)' }}>
        <Icon sx={{ width: '22px', color: 'white.main' }} />
      </ListItemIcon>
      <ListItemText sx={{ color: 'white.main' }} primary={label} />
    </ListItemButton>
  )
}
