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
  gridTemplateColumns: 'auto 99px',
  alignItems: 'center',
  height: '55px',
}

export const info = {
  display: 'grid',
  alignItems: 'center',
  width: '102px',

  '& *': {
    border: 'transparent !important',
  },
  '& .MuiFormControl-root': {
    width: '102px',
  },
  '& .MuiOutlinedInput-root': {
    width: '102px',
  },
  '& svg': {
    fill: '#9076FF',
  },
  '& input': {
    height: 'fit-content',
    lineHeight: 'normal',
    padding: '0px',
  },
}

export const dialog = {
  '& .MuiGrid-root': {
    '& .MuiButton-root': {
      background: 'white !important',
    },
  },
  '& .MuiIconButton-root': {
    display: 'none',
  },
  '& .MuiDialogActions-root': {
    '& button': {
      color: 'black.main',
      background: 'transparent',
      boxShadow: 'none',
    },
  },
}
