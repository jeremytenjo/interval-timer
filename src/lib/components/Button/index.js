import MUIButton from '@material-ui/core/Button'

export default function Button({ text, children, ...rest }) {
  return <MUIButton {...rest}>{text || children}</MUIButton>
}
