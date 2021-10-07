import Box from 'lib/components/Box'

import Accordion from '../../../../../../../../../lib/components/Accordion'
import RadioGroup from '../../../../../../../../../lib/components/forms/RadioGroup'

import * as styles from './styles.js'

export default function SoundSettingsUi({ groups, title }) {
  return (
    <Box sx={styles.wrapper}>
      <Accordion title={title}>
        {groups.map((group) => (
          <RadioGroup
            key={group.name}
            name={group.name}
            title={group.title}
            defaultValue={group.defaultValue}
            options={group.options}
          />
        ))}
      </Accordion>
    </Box>
  )
}
