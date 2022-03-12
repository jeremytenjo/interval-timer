// https://on.cypress.io/writing-first-test

describe('Create timer', () => {
  it('Timer is created', () => {
    cy.visit('/')
    cy.get('[data-id=CreateTimerForm]', { timeout: 10000 }).should('be.visible')
    cy.get('#timer-name').type('Upper Body')
    cy.contains('Save').click()
    cy.get('[aria-label="Countdown timer"]', { timeout: 10000 }).should('be.visible')
  })
})
