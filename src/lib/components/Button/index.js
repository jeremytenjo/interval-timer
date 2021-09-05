import MUIButton from '@mui/material/Button'

export default function Button({ text, children, ...rest }) {
  return <MUIButton {...rest}>{text || children}</MUIButton>
}
