import MenuItem from '../../../../../../Menu/MenuItem'
import Button from '../../../../../../Button'
import Chevron from '../../../../../../icons/Chevron'
import Box from '../../../../../../Box'
import Popover from '../../../../../../Popover'
import useTimers from '../../../../../../../../data/timers/useTimers'
import useTimer from '../../../../../../../../globalState/useTimer'

import * as styles from './styles'

export default function TopBarMenu() {
  const timers = useTimers()
  const navigate = useNavigate()
  const timer = useTimer()

  const [anchorEl, setAnchorEl] = useState(null)

  const menuId = 'TopBarMenu'
  const menuButtonId = 'TopBarMenu'
  const open = Boolean(anchorEl)
  const id = open ? 'AppBar_Menu' : undefined

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onItemClick = (selectedItem) => {
    handleClose()
    timer.resetTimer()
    navigate(`/timer/${selectedItem.id}`)
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
            fontSize: '17px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textTransform: 'capitalize',
          }}
          component='h1'
        >
          {(timers.selectedTimer && timers.selectedTimer.name) || 'No Timers Saved'}
        </Box>
      </Button>

      {timers.data.length ? (
        <Popover
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          {timers.data.map((timer) => (
            <MenuItem key={timer.id} sx={styles.items} onClick={() => onItemClick(timer)}>
              {timer.name}
            </MenuItem>
          ))}
        </Popover>
      ) : null}
    </Box>
  )
}
