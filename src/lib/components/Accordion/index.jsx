import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionMui from '@mui/material/Accordion'

import Text from '../Text/Text'

import * as styles from './styles'

export default function Accordion({ title, children, titleIcon: TitleIcon }) {
  return (
    <AccordionMui sx={styles.wrapper}>
      <AccordionSummary
        sx={styles.accordionSummary.wrapper}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <TitleIcon sx={styles.accordionSummary.titleIcon} />
        <Text sx={styles.accordionSummary.title} text={title} />
      </AccordionSummary>

      <AccordionDetails sx={styles.accordionDetails.wrapper}>{children}</AccordionDetails>
    </AccordionMui>
  )
}
