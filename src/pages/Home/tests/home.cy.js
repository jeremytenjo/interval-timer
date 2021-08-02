/// <reference types="cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6007/?path=/story/pages-home-index--default-story')
  })

  describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      // https://on.cypress.io/should
      cy.get('.assertion-table')
        .find('tbody tr:last')
        .should('have.text', 'Column content')
    })
  })
})
