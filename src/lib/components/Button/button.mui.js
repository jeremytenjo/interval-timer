export default {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    variants: [
      {
        props: { variant: 'noGradient' },
        style: {
          background: 'transparent',
        },
      },
    ],
    styleOverrides: {
      root: {
        color: 'white',
        borderRadius: '100px',
        background: 'linear-gradient(83.6deg, #5D59FF 8.71%, #9076FF 98.37%)',
        fontWeight: 'bold',
        fontFamily: 'SourceSandProRegular',
      },
    },
  },
}
