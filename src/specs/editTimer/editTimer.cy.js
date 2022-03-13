// https://on.cypress.io/writing-first-test

import '../createTimer/spec.createTimer.js'
import './spec.editTimer'

const timerName = 'Lower Body'

describe('Edit timer', () => {
  it('Timer is edited', async () => {
    cy.createTimer({ timerName })
    cy.editTimer({ timerName })
  })
})
