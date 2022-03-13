// https://on.cypress.io/writing-first-test

import './spec.createTimer'

describe('Create timer', () => {
  it('Timer is created', () => {
    cy.createTimer()
  })
})
