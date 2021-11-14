import MUIButton, { ButtonProps } from '@mui/material/Button'

type CustomProps = {
  text?: string
}

type Props = ButtonProps & CustomProps

export default function Button({ text, children, ...rest }: Props) {
  return <MUIButton {...rest}>{text || children}</MUIButton>
}
