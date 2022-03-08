import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import Radio from '@mui/material/Radio'
import RadioGroupMui from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function RadioGroup({ name, title, defaultValue, options = [] }) {
  const methods = useFormContext()

  return (
    <Controller
      name={name}
      control={methods.control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl
          component='fieldset'
          {...field}
          sx={{
            width: '100%',
            '.MuiFormLabel-root': {
              color: 'grey.light',
              fontWeight: 'bold',
              marginBottom: '20px',
            },
            '.MuiFormControlLabel-root': {
              justifyContent: 'space-between',
              margin: '0px',
            },
          }}
        >
          <FormLabel component='legend'>{title}</FormLabel>
          <RadioGroupMui
            aria-label={title}
            name='row-radio-buttons-group'
            defaultValue={defaultValue}
            sx={{ display: 'grid' }}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={
                  <Radio
                    sx={{
                      color: 'white.main',
                    }}
                  />
                }
                label={option.label}
                labelPlacement='start'
                sx={{ textAlign: 'left' }}
              />
            ))}
          </RadioGroupMui>
        </FormControl>
      )}
    />
  )
}
