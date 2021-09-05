import Row from './Row'
import Item from './Item'

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
