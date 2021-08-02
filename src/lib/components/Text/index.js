import Typography from '@material-ui/core/Typography'

export default function Text({ text, as, variant = 'body1', ...props }) {
  return (
    <Typography component={as} variant={variant} {...props}>
      {text}
    </Typography>
  )
}
