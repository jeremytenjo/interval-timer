// https://on.cypress.io/writing-first-test

import './command.createTimer'

describe('Create timer', () => {
  it('Timer is created', () => {
    cy.createTimer()
  })
})
