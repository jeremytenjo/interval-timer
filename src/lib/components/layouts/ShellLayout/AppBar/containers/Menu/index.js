import Menu from '../../../../../Menu'
import MenuItem from '../../../../../Menu/MenuItem'
import Button from '../../../../../Button'
import Chevron from '../../../../../icons/Chevron'
import Box from '../../../../../Box'

export default function TopBarMenu() {
  const menuId = 'TopBarMenu'
  const menuButtonId = 'TopBarMenu'
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ maxWidth: 200 }}>
      <Button
        id={menuButtonId}
        aria-controls={menuId}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='noGradient'
        endIcon={<Chevron sx={{ width: '11px' }} />}
        sx={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <Box
          sx={{
            fontSize: '15px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textTransform: 'capitalize',
          }}
          component='h1'
        >
          No Timers saved
        </Box>
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': menuButtonId,
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}
