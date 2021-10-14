import Box from '../../../../../../lib/components/Box/index.jsx'

export default function Row({ children, sx = {} }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '20px',
        userSelect: 'none',
        textTransform: 'uppercase',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
