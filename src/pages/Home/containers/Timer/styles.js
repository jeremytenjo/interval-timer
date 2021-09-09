export const wrapper = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: 'fit-content',
  height: 'fit-content',
  margin: 0,
  transform: 'translate(-50%, -50%)',
  userSelect: 'none',
}

export const innerWrapper = {
  width: '100%',
  padding: '60px',
}

export const infoTop = {
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'space-between',
  width: '100%',
}

export const infoBottom = {
  wrapper: {
    transform: 'translateY(20px)',
  },
  time: {
    fontSize: '70px',
    color: 'white',
  },
}
