import React from 'react'

import Box from '../../../../../../lib/components/Box/Box.jsx'

export default function Item({ title, time, sx = {} }) {
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
