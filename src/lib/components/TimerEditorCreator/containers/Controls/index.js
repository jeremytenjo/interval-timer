import BottomBar from '../../../BottomBar'
import Button from '../../../Button'

export default function Controls({ onSave, saveButtonText = 'Save' }) {
  return (
    <BottomBar>
      <Button onClick={onSave}>{saveButtonText}</Button>
    </BottomBar>
  )
}
