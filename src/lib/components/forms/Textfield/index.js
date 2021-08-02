import MUITextField from '@material-ui/core/TextField'
import { Controller } from 'react-hook-form'

export default function Textfield({
  name,
  label = 'label',
  validation = {},
  control,
  defaultValue = '',
  forceError,
}) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={validation}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error = {} },
      }) => {
        const hasError = forceError || !!Object.keys(error).length
        const errorMessage = !hasError
          ? ''
          : error.type === 'required'
          ? 'Input Required'
          : error.message
          ? error.message
          : 'error message'

        return (
          <MUITextField
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            helperText={hasError && errorMessage}
            inputRef={ref}
            error={hasError}
          />
        )
      }}
    />
  )
}
