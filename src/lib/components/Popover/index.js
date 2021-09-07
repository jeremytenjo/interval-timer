import PopoverMui from '@mui/material/Popover'

import Box from '../Box'

export default function Popover({ children, ...rest }) {
  return (
    <PopoverMui {...rest}>
      <Box
        sx={{
          backdropFilter: 'saturate(180%) blur(20px)',
        }}
      >
        {children}
      </Box>
    </PopoverMui>
  )
}
