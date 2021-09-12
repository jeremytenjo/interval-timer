import formatDuration from 'format-duration'

import Box from '../../../../../lib/components/Box'

export default function Info({ time, title, sx = {}, titleSx = {}, timeSx = {} }) {
  return (
    <Box sx={{ textAlign: 'center', ...sx }}>
      <Box
        component='p'
        sx={{ color: 'grey.light', fontSize: 23, lineHeight: 1, ...timeSx }}
      >
        {formatDuration(time * 1000)}
      </Box>

      <Box
        component='p'
        sx={{
          color: 'grey.light',
          fontSize: '14px',
          textDecoration: 'uppercase',
          ...titleSx,
        }}
      >
        {title}
      </Box>
    </Box>
  )
}
