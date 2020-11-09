describe('Server Status', () => {
  it('Should load search page', () => {
    cy.visit('/')
    cy.findByText(/Useless But Sick Repo Searcher/i).should('be.visible')
  })
})
