import BottomBar from '../../../BottomBar'
import Button from '../../../Button'

export default function Controls({ onSave, onStart }) {
  return (
    <BottomBar>
      <Button onClick={onSave}>Save</Button>
      <Button onClick={onStart}>Start</Button>
    </BottomBar>
  )
}
