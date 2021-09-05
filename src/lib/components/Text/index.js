import Typography from '@mui/material/Typography'

/**
 * {@link https://material-ui.com/api/typography/|Docs}
 */
export default function Text({ text, as, variant = 'body1', ...props }) {
  return (
    <Typography component={as} variant={variant} {...props}>
      {text}
    </Typography>
  )
}
