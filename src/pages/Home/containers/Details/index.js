import Box from '../../../../lib/components/Box'

const Row = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '20px',
        userSelect: 'none',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

const Item = ({ title, time, sx = {} }) => {
  return (
    <Box sx={{ ...sx }}>
      <Box component='p' sx={{ color: 'grey.light', fontSize: 12, marginBottom: '8px' }}>
        {title}
      </Box>
      <Box component='p' sx={{ fontSize: 18 }}>
        {time}
      </Box>
    </Box>
  )
}

export default function Details() {
  return (
    <>
      <Row sx={{ marginTop: '12px' }}>
        <Item title='Repetitions' time={60} />
        <Item title='Sets' time={60} sx={{ textAlign: 'right' }} />
      </Row>

      <Row sx={{ position: 'fixed', bottom: '80px', left: 0, right: 0 }}>
        <Item title='Remaining' time={60} />
        <Item title='Title' time={60} sx={{ textAlign: 'right' }} />
      </Row>
    </>
  )
}
