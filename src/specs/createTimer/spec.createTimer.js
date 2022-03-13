// https://docs.cypress.io/api/cypress-api/custom-commands#Syntax

Cypress.Commands.add('createTimer', (options = { timerName: 'Upper Body' }) => {
  cy.visit('/')
  cy.get('[data-id=CreateTimerForm]', { timeout: 10000 }).should('be.visible')
  cy.get('#timer-name').type(options.timerName)
  cy.contains('Save').click()
  cy.get('[aria-label="Countdown timer"]', { timeout: 10000 }).should('be.visible')
  cy.get('[data-id=selectedTimerHeader]', { timeout: 10000 })
    .first()
    .should('be.visible')
    .contains(options.timerName)
})
