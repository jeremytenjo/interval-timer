export default {
  MuiAlert: {
    styleOverrides: {
      root: {
        backdropFilter: 'saturate(180%) blur(20px)',
        color: 'white',
        '& svg': {
          color: 'white',
        },
      },
    },
    variants: [
      {
        props: { severity: 'success' },
        style: {
          background: 'rgb(0 255 43 / 32%)',
          borderRadius: '7px',
        },
      },
      {
        props: { severity: 'error' },
        style: {
          background: 'rgb(255 0 0 / 32%)',
          borderRadius: '7px',
        },
      },
    ],
  },
}
