import BottomBar from '../../../BottomBar'
import Button from '../../../Button'

export default function Controls({ onSave }) {
  return (
    <BottomBar>
      <Button onClick={onSave}>Save</Button>
    </BottomBar>
  )
}
