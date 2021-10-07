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
        <FormControl component='fieldset' {...field}>
          <FormLabel component='legend'>{title}</FormLabel>
          <RadioGroupMui
            aria-label={title}
            name='row-radio-buttons-group'
            defaultValue={defaultValue}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
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
