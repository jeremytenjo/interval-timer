// https://on.cypress.io/writing-first-test

import createTimer from '../createTimer/createTimer.spec.cy.js'

describe('Edit timer', () => {
  it('Timer is edited', async () => {
    // TODO make createTimer reusable
    createTimer()
  })
})
