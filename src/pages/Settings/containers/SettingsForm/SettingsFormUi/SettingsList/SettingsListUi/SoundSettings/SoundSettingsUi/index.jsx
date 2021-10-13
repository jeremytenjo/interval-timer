import Box from '../../../../../../../../../lib/components/Box/index.jsx'
import Accordion from '../../../../../../../../../lib/components/Accordion'
import RadioGroup from '../../../../../../../../../lib/components/forms/RadioGroup'

import * as styles from './styles.ts'

export default function SoundSettingsUi({ fields, title, titleIcon }) {
  return (
    <Box sx={styles.wrapper}>
      <Accordion title={title} titleIcon={titleIcon}>
        {fields.map(
          (field) =>
            field.type === 'radioGroup' && (
              <RadioGroup
                titleIcon={titleIcon}
                key={field.name}
                name={field.name}
                title={field.title}
                defaultValue={field.defaultValue}
                options={field.options}
              />
            ),
        )}
      </Accordion>
    </Box>
  )
}
