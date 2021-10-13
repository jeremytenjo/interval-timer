import MUITimePicker from '@mui/lab/TimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export default function TimePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MUITimePicker {...props} />
    </LocalizationProvider>
  )
}
