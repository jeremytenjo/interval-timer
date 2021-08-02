import React from 'react'

import Box from '../../Box'
import useForm from '../useForm'

export default function Form({ defaultValues, children, onSubmit, sx = {} }) {
  const methods = useForm({ defaultValues })
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = methods

  return (
    <Box onSubmit={handleSubmit(onSubmit)} component='form' sx={sx}>
      {React.Children.map(children, (child) => {
        return child?.props?.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
                error: errors[child.props.name],
                control,
              },
            })
          : child
      })}
    </Box>
  )
}
