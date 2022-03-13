// // https://docs.cypress.io/api/cypress-api/custom-commands#Syntax

// Cypress.Commands.add('editTimer', (options = { timerName: 'Upper Body' }) => {
//   const newTimerExtra = '!!!'
//   const newTimerName = `${options.timerName}${newTimerExtra}`

//   cy.get('[data-id=editTimerButton]', { timeout: 10000 }).should('be.visible').click()
//   cy.get('#timer-name').type(newTimerExtra)
//   cy.contains('Save').click()
//   cy.get('[aria-label="Countdown timer"]', { timeout: 20000 }).should('be.visible')
//   cy.get('[data-id=selectedTimerHeader]', { timeout: 10000 })
//     .first()
//     .should('be.visible')
//     .contains(newTimerName)
// })
