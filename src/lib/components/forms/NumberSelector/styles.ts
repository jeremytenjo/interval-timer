export const wrapper = {
  padding: '7.5px 14px',
  backgroundColor: 'black.lighter',
  borderRadius: '7px 70px 70px 7px',
  color: 'grey.light',
  '& .title': {
    userSelect: 'none',
  },
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'space-between',
  gridTemplateColumns: 'auto 160px',
  alignItems: 'center',
}

export const info = {
  display: 'grid',
  gridAutoFlow: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const inputs = {
  display: 'grid',
  gridAutoFlow: 'column',
  alignItems: 'center',
  '& input': {
    backgroundColor: 'transparent',
    textAlign: 'center',
    border: 'transparent',
    color: 'white.main',
    width: '30px',
    fontSize: '16px',
    '&:active': {
      backgroundColor: 'transparent',
      border: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
      border: 'transparent',
      outline: 'none',
    },
  },
}
