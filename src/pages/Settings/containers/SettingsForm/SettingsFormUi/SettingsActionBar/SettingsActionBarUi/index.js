import BottomBar from '../../../../../../../lib/components/BottomBar'
import Button from '../../../../../../../lib/components/Button'

export default function SettingsActionBarUi({ onSave }) {
  return (
    <BottomBar>
      <Button onClick={onSave}>Save</Button>
    </BottomBar>
  )
}
