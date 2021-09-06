import Box from '../../../../../lib/components/Box'

export default function Info({ time, title, sx = {}, titleSx = {}, timeSx = {} }) {
  return (
    <Box sx={{ textAlign: 'center', ...sx }}>
      <Box
        component='p'
        sx={{ color: 'grey.light', fontSize: 23, lineHeight: 1, ...timeSx }}
      >
        {time}
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
