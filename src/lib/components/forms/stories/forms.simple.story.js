import Form from '../Form'
import TextField from '../Textfield'
import Button from '../../Button'

export default function FormStory() {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={onSubmit} sx={{ display: 'grid', gridGap: 25, width: 200, p: 3 }}>
      <TextField name='firstName' label='First Name' />
      <TextField name='lastName' label='Last Name' validation={{ required: true }} />
      <Button type='submit' text='submit' />
    </Form>
  )
}
