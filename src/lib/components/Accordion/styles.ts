export const wrapper = {
  backgroundColor: 'transparent',
}

export const accordionSummary = {
  wrapper: {
    color: 'white.main',
    backgroundColor: '#373543',
    paddingLeft: '30px',
    alignItems: 'center',
    '& .MuiAccordionSummary-content': {
      margin: '20px 0',
    },
  },
  title: { fontWeight: 'bold', fontSize: '16px' },
  titleIcon: {
    stroke: 'white',
    marginRight: '10px',
    width: '20px',
  },
}

export const accordionDetails = {
  wrapper: {
    display: 'grid',
    backgroundColor: '#0C0720',
    color: 'white.main',
    padding: '30px',
    gridGap: '30px',
    borderRadius: '0 0 20px 20px',
  },
}
