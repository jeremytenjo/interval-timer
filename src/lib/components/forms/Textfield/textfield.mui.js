export default {
  MuiTextField: {
    defaultProps: {
      color: 'white',
      InputLabelProps: { shrink: false },
    },
    styleOverrides: {
      root: {
        color: 'white',
        borderRadius: '7px 70px 70px 7px',
        '& .Mui-focused': {
          borderColor: 'red',
        },
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#373543',
          borderRadius: '7px 70px 70px 7px',
          '&:hover fieldset': {
            borderColor: 'transparent',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'lightgrey',
          },
        },
        '& input': {
          color: 'white',
          fontSize: '15px',
        },
        '& label': {
          color: 'white',
          display: 'none',
        },
        '& fieldset': {
          transition: '0.2s',
          borderColor: 'transparent',
          borderRadius: '7px 70px 70px 7px',
        },
      },
    },
  },
}
