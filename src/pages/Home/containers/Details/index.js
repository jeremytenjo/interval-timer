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
        textTransform: 'uppercase',
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
      <Box
        component='p'
        sx={{
          color: 'grey.light',
          fontSize: 12,
          marginBottom: '1px',
        }}
      >
        {title}
      </Box>

      <Box component='p' sx={{ fontSize: 23 }}>
        {time}
      </Box>
    </Box>
  )
}

const bottomItemsCss = {
  display: 'flex',
  flexDirection: 'column-reverse',
}

export default function Details() {
  return (
    <>
      <Row sx={{ marginTop: '12px' }}>
        <Item title='Repetitions' time={12} />
        <Item title='Sets' time={3} sx={{ textAlign: 'right' }} />
      </Row>

      <Row
        sx={{
          position: 'fixed',
          bottom: '80px',
          left: 0,
          right: 0,
        }}
      >
        <Item title='Remaining' time={60} sx={{ ...bottomItemsCss }} />
        <Item title='Total' time={60} sx={{ ...bottomItemsCss, textAlign: 'right' }} />
      </Row>
    </>
  )
}
